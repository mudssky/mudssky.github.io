import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fsPromises from 'fs/promises'
// import remark from 'remark'
// import html from 'remark-html'

export interface PostMatter {
  id: string
  title: string
  date: string
}

export interface PostData extends PostMatter {
  content: string
}
const postsDirectory = path.join(process.cwd(), 'posts')

// 获取一个目录下所有文件,支持正则匹配文件名
export async function getFileList(dir: string, filterReggex?: RegExp) {
  const fileList: { fileName: string; filePath: string }[] = []
  async function inner_getFileList(pathstr: string) {
    const fileDirents = await fsPromises.readdir(pathstr, {
      withFileTypes: true,
    })
    for (let index in fileDirents) {
      const filename = fileDirents[index].name
      const filePath = path.join(pathstr, filename)
      if (fileDirents[index].isDirectory()) {
        await inner_getFileList(filePath)
      } else {
        // 过滤不满足正则的,对满足文件条件的进行过滤
        if (filterReggex && !filterReggex.test(filename)) {
          // console.log(filterReggex)
          continue
        }
        fileList.push({
          fileName: filename,
          filePath: filePath,
        })
      }
    }
  }
  await inner_getFileList(dir)
  return fileList
}

export async function getSortedPostsData() {
  // 匹配所有后缀是md的文件
  const fileList = await getFileList(postsDirectory, /.md$/)
  const allPostsData = fileList.map((fileInfo) => {
    // Remove ".md" from file name to get id 获取无后缀的文件名
    const fileName = fileInfo.fileName
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string 读取markdown文件
    const fullPath = fileInfo.filePath
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section 解析matter data
    const matterResult = matter(fileContents)
    // 截取开头的内容, 去除markdown里的特殊符号
    const excerpt = matterResult.content.substring(0, 150).replace(/[#*`]/g, '')

    // 组合提取到的matter data
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt,
      category: matterResult.data!.category || '',
    }
  })
  // Sort posts by date
  return allPostsData.sort((a: PostMatter, b: PostMatter) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNameDirents = fs.readdirSync(postsDirectory, {
    withFileTypes: true,
  })
  const fileNames = fileNameDirents.filter(function (f) {
    return f.isFile()
  })
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.name.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content)
  // const contentHtml = processedContent.toString()
  // Combine the data with the id
  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
    // markdown: matterResult.content,
  }
}

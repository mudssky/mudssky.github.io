import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fsPromises from 'fs/promises'
// import remark from 'remark'
// import html from 'remark-html'

export interface PostMatter {
  id: string
  title: string
  lastUpdated: number
}

export interface PostData {
  id: string
  title: string
  lastUpdated: number
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

export async function getAllPostsData() {
  // 匹配所有后缀是md的文件
  const fileList = await getFileList(postsDirectory, /.md$/)
  const allPostsData = fileList.map((fileInfo) => {
    // Remove ".md" from file name to get id 获取无后缀的文件名
    const fileName = fileInfo.fileName
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string 读取markdown文件
    const fullPath = fileInfo.filePath
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // const fileContents = await fsPromises.readFile(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section 解析matter data
    const matterResult = matter(fileContents)
    // 截取开头的内容, 去除markdown里的特殊符号
    const excerpt = matterResult.content.substring(0, 200).replace(/[#*`]/g, '')

    // 组合提取到的matter data
    return {
      id,
      title: matterResult.data.title,
      lastUpdated: matterResult.data.lastUpdated,
      excerpt,
      // 文章分类
      category: matterResult.data.category || '',
      tags: matterResult.data.tags || [],
    }
  })
  return allPostsData
}
export async function getSortedPostsData() {
  const allPostsData = await getAllPostsData()
  return allPostsData.sort((a: any, b: any) => {
    if (a.lastUpdated < b.lastUpdated) {
      return 1
    } else if (a.lastUpdated === b.lastUpdated) {
      return 0
    } else {
      return -1
    }
  })
}

export async function getAllPostIds() {
  const fileList = await getFileList(postsDirectory, /.md$/)
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
  return fileList.map((fileInfo) => {
    return {
      params: {
        id: fileInfo.fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  // 修复特殊字符的问题,把特殊字符替换成.也就是任意字符的正则表示就可以了。
  // 二维码(QR code)的解码原理 这样原来括号造成的无法识别就解决了。
  const fixedId = id.replace(/[()]/g, '.')
  // console.log(fixedId)

  // 匹配所有后缀是md的文件
  const fileList = await getFileList(
    postsDirectory,
    new RegExp(`${fixedId}\.md$`)
  )
  // console.log('match list ', fileList)

  if (!fileList || fileList.length < 1) {
    throw new Error(`id:${id},post not found`)
  }
  const fullPath = fileList[0].filePath
  const fileContents = await fsPromises.readFile(fullPath, 'utf8')
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
    lastUpdated: matterResult.data.lastUpdated,
    content: matterResult.content,
    // markdown: matterResult.content,
  }
}

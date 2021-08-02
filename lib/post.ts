import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import remark from 'remark'
import html from 'remark-html'

export interface PostMatter {
  id: string
  title: string
  date: string
}

export interface PostData extends PostMatter {
  content: string
}
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(): PostMatter[] {
  // Get file names under /posts 读取posts下的文件名
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id 获取无后缀的文件名
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string 读取markdown文件
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section 解析matter data
    const matterResult = matter(fileContents)

    // 组合提取到的matter data
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
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
  const fileNames = fs.readdirSync(postsDirectory)

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
        id: fileName.replace(/\.md$/, ''),
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
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  // Combine the data with the id
  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: contentHtml,
    // content: matterResult.content,
  }
}

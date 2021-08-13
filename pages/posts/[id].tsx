import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/post'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/github-dark.css'

import Toc from '../../components/utils/toc'
import { dateFormat } from '../../lib/utils'

export default function Post({ postData }: { postData: PostData }) {
  // 使用highlight.js
  useEffect(() => {
    hljs.highlightAll()
    // const script = document.createElement('script')
    // // script.defer = true
    // script.innerHTML = `
    //   hljs.highlightAll()`
    // document.body.appendChild(script)
    // return () => {
    //   document.body.removeChild(script)
    // }
  }, [])
  return (
    <Layout className="lg:w-full flex justify-center">
      <Head>
        <title>{postData.title}</title>
        {/*  eslint-disable-next-line @next/next/no-css-tags */}
        {/* <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        /> */}
      </Head>
      {/* <div
        className="w-1/2 m-auto prose"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      /> */}
      <div className="w-full lg:w-auto  p-10 mt-5 ring-1 ring-gray-100 shadow-sm">
        <div className="text-xs text-gray-400 space-x-4 border-b-2 mb-2 shadow-xs">
          <span>
            {dateFormat(postData.lastUpdated * 1000, 'yyyy.MM.dd hh:mm:ss')}
          </span>
          <span>字数: {postData.content.length}</span>
        </div>
        <ReactMarkdown
          linkTarget="_blank"
          // 转换图片链接到根目录
          transformImageUri={(src, alt, title) => {
            if (src.startsWith('assets')) {
              return '/' + src
            }
            return src
          }}
          remarkPlugins={[gfm]}
          className="m-auto prose prose-indigo"
        >
          {postData.content}
        </ReactMarkdown>
      </div>
      {/* <script
        src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"
        defer
      ></script> */}
      <Toc></Toc>
    </Layout>
  )
}
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

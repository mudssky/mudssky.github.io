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
    <Layout>
      <Head>
        <title>{postData.title}</title>
        {/*  eslint-disable-next-line @next/next/no-css-tags */}
        {/* <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        /> */}
      </Head>
      {postData.id}
      <br />
      {postData.date}
      {/* <div
        className="w-1/2 m-auto prose"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      /> */}
      <div className="w-800 pt-8 m-auto ring-1 ring-gray-50 shadow-md">
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
  const paths = getAllPostIds()
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

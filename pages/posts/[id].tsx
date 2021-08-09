import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/post'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/github-dark.css'

import Toc from '../../components/Utils/Toc'

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
      <ReactMarkdown remarkPlugins={[gfm]} className="w-1/2 m-auto prose">
        {postData.content}
      </ReactMarkdown>

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

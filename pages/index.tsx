import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData, PostMatter } from '../lib/post'
import React, { useState } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import { TimestampDiff } from '../lib/utils'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  const tagInfos: any = {}
  // const tags = ['JavaScript', '函数式编程', 'webpack', 'vue', 'git', 'vim']
  // 收集现在有的tag
  const tags = Array<string>()
  for (const i in allPostsData) {
    allPostsData[i].tags.forEach((tag: string) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  }
  // console.log(tags)

  tags.forEach((tag) => {
    tagInfos[tag] = []
  })
  allPostsData.forEach((post) => {
    post.tags.forEach((tag: string) => {
      if (tagInfos[tag]) {
        tagInfos[tag].push(post.id)
      }
    })
  })

  return {
    props: {
      allPostsData,
      tagInfos,
    },
  }
}
function Tag(props: any) {
  return (
    <div
      className={props.className}
      title={props.title}
      onClick={() => {
        props.handleClick(props.tagname)
      }}
    >
      {props.children}
    </div>
  )
}
function Tags(props: any) {
  const tagInfos = props.tagInfos
  const tags = Object.keys(tagInfos)

  return (
    <div className="">
      {/* <div className="absolute lg:hidden right-0 top-1/3 rounded-full bg-green-400">
        tags
      </div> */}
      <div
        className={
          'w-full  p-1 lg:w-56 lg:absolute lg:top-1/4 lg:right-0 bg-gray-50 transition-all'
        }
      >
        <div className="font-serif text-center text-gray-500  mb-2">TAGS</div>
        <div className="flex flex-wrap justify-center lg:justify-start">
          {tags.map((tag: string) => (
            <Tag
              tagname={tag}
              key={tag}
              className="text-xs font-serif p-1 mt-1 cursor-pointer text-gray-500 rounded-full border-2 border-gray-500 mx-1 hover:text-blue-500 hover:border-blue-500"
              title={tagInfos[tag].length + '篇'}
              handleClick={props.handleClick}
            >
              {tag} ({tagInfos[tag].length}篇)
            </Tag>
          ))}
        </div>
      </div>
    </div>
  )
}
export default function Home({
  allPostsData,
  tagInfos,
}: {
  allPostsData: any
  tagInfos: Map<any, any>
}) {
  const [postData, setPostData] = useState(allPostsData)

  function filterTag(tagname: string) {
    setPostData(
      allPostsData.filter((post: any) => {
        return post.tags.includes(tagname)
      })
    )
  }
  return (
    <Layout
      handleLogoClick={() => {
        if (postData.length !== allPostsData.length) {
          setPostData(allPostsData)
        }
      }}
    >
      <div className="relative">
        <Tags tagInfos={tagInfos} handleClick={filterTag}></Tags>
        <ul className="flex-col mt-8 space-y-3">
          {postData.map(({ id, lastUpdated, title, excerpt, tags }: any) => (
            <li
              className="w-1/2 min-w-min mx-auto pb-2 border-b-2 border-gray-100"
              key={id}
            >
              <div className="text-xs text-gray-500 flex justify-items-start">
                <span id="home-lastUpdated" className="">
                  {TimestampDiff(lastUpdated)}
                </span>
                <div id="home-taglist" className="">
                  {tags.map((tag: any) => (
                    <Tag
                      key={tag}
                      tagname={tag}
                      className="inline hover:text-pink-400 cursor-pointer"
                      handleClick={filterTag}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <Link href={'/posts/' + id}>
                <a className="cursor-pointer inline-block pt-1">
                  <div className="text-base font-sans font-semibold">{id}</div>
                  <div className="text-xs text-gray-400 font-sans pt-1">
                    {excerpt}...
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

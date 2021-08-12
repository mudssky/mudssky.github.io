import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData, PostMatter } from '../lib/post'
import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  }
}
// 计算一个时间戳(秒)，离当前时间戳的距离
function TimestampDiff(lastTimestamp: number) {
  const currentTimestamp = Math.floor(new Date().getTime() / 1000)
  const diffSeconds = currentTimestamp - lastTimestamp
  // const second=1
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = month * 12

  let resStr = ''
  if (diffSeconds > year) {
    resStr = `${Math.floor(diffSeconds / year)}年前`
  } else if (diffSeconds > month) {
    resStr = `${Math.floor(diffSeconds / month)}月前`
  } else if (diffSeconds > day) {
    resStr = `${Math.floor(diffSeconds / day)}天前`
  } else if (diffSeconds > hour) {
    resStr = `${Math.floor(diffSeconds / hour)}小时前`
  } else if (diffSeconds > minute) {
    resStr = `${Math.floor(diffSeconds / minute)}分钟前`
  } else {
    resStr = `${Math.floor(diffSeconds)}秒前`
  }
  return resStr
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <ul className="flex-col mt-8 space-y-3">
        {allPostsData.map(({ id, lastUpdated, title, excerpt, tags }: any) => (
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
                  <span key={tag} className="">
                    {tag}
                  </span>
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
    </Layout>
  )
}

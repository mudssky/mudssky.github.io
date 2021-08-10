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

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <ul className="flex-col mt-4 space-y-6">
        {allPostsData.map(({ id, date, title, excerpt, category }: any) => (
          <li
            className="w-1/2 min-w-min mx-auto border-b-2 border-gray-100"
            key={id}
          >
            <div className="">{title}</div>
            <div>{date}</div>
            <Link href={'/posts/' + id}>
              <a>{id}</a>
            </Link>
            <div>{excerpt}</div>
            <div>{category}</div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

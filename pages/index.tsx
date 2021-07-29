import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/post'
import React from 'react'
import Layout from '../components/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // console.log(allPostsData);
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }:any) {
  return (
    <Layout >
        <h2 className="">Blog</h2>
        <ul className="flex-col">
          {allPostsData.map(({ id, date, title }:any) => (
            <li className="" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    </Layout>
  )
}
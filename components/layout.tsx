import Head from 'next/head'
import Header from './header/header'
// import Image from 'next/image'
// import Link from 'next/link'
// import '../styles/globals.css'
const name = 'my name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
    </div>
  )
}

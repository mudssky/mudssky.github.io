import Head from 'next/head'
import Header from './header/header'
// import Image from 'next/image'
// import Link from 'next/link'
// import '../styles/globals.css'
const name = 'my name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, className }: any) {
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </Head>
      <Header></Header>
      <main className={className}>{children}</main>
    </div>
  )
}

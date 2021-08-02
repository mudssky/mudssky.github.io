import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/post'

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.id}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
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

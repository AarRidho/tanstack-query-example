import React from 'react'
import { Header, InfoBox, Layout } from '../components'
import { fetchPosts } from '../queries/posts'
import { InferGetServerSidePropsType } from 'next';
import { PostList } from '../components/PostList';

export async function getServerSideProps() {
  const result = await fetchPosts(10);

  return {
    props: {
      data: result,
    },
  }
}


const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSR without React-Query.</InfoBox>
      <PostList data={data} />
    </Layout>
  )
}

export default Home

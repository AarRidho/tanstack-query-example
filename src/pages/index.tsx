import React from 'react'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { Header, InfoBox, Layout, PostListQuery } from '../components'
import { postsQueryOptions } from '../queries/posts'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;
  const queryClient = new QueryClient();

  const _postCount = Array.isArray(query.count) ? query.count?.[0] || '10' : query.count || '10';
  const postCount = parseInt(_postCount);
  
  await queryClient.fetchQuery(postsQueryOptions(postCount));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Home = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSR with React-Query.</InfoBox>
      <PostListQuery />
    </Layout>
  )
}

export default Home

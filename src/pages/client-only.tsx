import React from 'react'
import { Header, InfoBox, Layout, PostListQuery } from '../components'

const ClientOnly = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <PostListQuery />
    </Layout>
  )
}

export default ClientOnly

import React from 'react'
import Helmet from 'react-helmet'

import { Layout, Link } from '../components'

const IndexPage = () => (
  <Layout>
    <Helmet title="Home" />
    <Link to="/cv/" text="CV" />
  </Layout>
)

export default IndexPage

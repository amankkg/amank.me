import React from 'react'
import Helmet from 'react-helmet'

import { Layout, Link } from '../components'

const IndexPage = () => (
  <Layout>
    <Helmet title="Home" />
    <p>blogposts...</p>
    <Link to="/contacts/" text="Contact me" />
    &nbsp;
    <Link to="/cv/" text="CV" />
  </Layout>
)

export default IndexPage

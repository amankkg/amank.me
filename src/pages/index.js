import React from 'react'
import Helmet from 'react-helmet'

import { Layout, Link } from '../components'

const IndexPage = () => (
  <Layout>
    <Helmet />
    <p>👋 Hey!</p>
    <Link to="/blog/" text="Blogposts" />
    &nbsp;
    <Link to="/contacts/" text="Contacts" />
    &nbsp;
    <Link to="/cv/" text="CV" />
  </Layout>
)

export default IndexPage

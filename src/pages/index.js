import React from 'react'
import Helmet from 'react-helmet'

import { Layout, Link, Emoji } from '../components'

const IndexPage = () => (
  <Layout>
    <Helmet />
    <p>
      <Emoji label="waving hand" value="👋" />
      Hey!
    </p>
    <Link to="/blog/" text="Blogposts" />
    &nbsp;
    <Link to="/contacts/" text="Contacts" />
    &nbsp;
    <Link to="/cv/" text="CV" />
  </Layout>
)

export default IndexPage

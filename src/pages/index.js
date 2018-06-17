import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Helmet titleTemplate={undefined} />
    <h1>Hi there!</h1>
    <p>My name is Aman Kubanychbek. I'm a software engineer.</p>
    <Link to="/blog/">Blogposts</Link>
    {' | '}
    <Link to="/contacts/">Contacts</Link>
  </Layout>
)

export default IndexPage

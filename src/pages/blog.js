import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const BlogPage = () => (
  <Layout>
    <Helmet title="Blog" />
    <h1>Blog</h1>
    {/* <Link to="/semi-controlled-inputs-in-react">
      Semi-controlled inputs in React
    </Link> */}
    <p>To be added...</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default BlogPage

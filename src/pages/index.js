import React from 'react'
import Helmet from 'react-helmet'

import { Layout, Link } from '../components'

const links = [
  ['/blog/', 'Blogposts'],
  ['/contacts/', 'Contacts'],
  ['/cv/', 'CV'],
]

const IndexPage = () => (
  <Layout>
    <Helmet titleTemplate={undefined} />
    <h1>Hi there!</h1>
    <p>My name is Aman Kubanychbek. I'm a software engineer.</p>
    {links.reduce((acc, [path, text]) => {
      if (acc.length > 0) acc.push(' ')

      acc.push(<Link key={path} to={path} text={text} />)

      return acc
    }, [])}
  </Layout>
)

export default IndexPage

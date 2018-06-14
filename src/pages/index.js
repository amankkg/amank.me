import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div>
    <Helmet titleTemplate={undefined} />
    <h1>Hi there!</h1>
    <p>My name is Aman Kubanychbek. I'm a software engineer from Kyrgyzstan.</p>
    <p>Welcome to my humble website.</p>
    <p>As you can see, here is not so much stuff yet.</p>
    <Link to="/blog/">Blogposts</Link>
    {' | '}
    <Link to="/contacts/">Contacts</Link>
  </div>
)

export default IndexPage

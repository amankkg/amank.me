import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi there!</h1>
    <p>Welcome to my humble website.</p>
    <p>As you can see, here is not so much stuff yet.</p>
    <Link to="/blog/">Blogposts</Link>
    {' | '}
    <Link to="/contacts/">Contacts</Link>
  </div>
)

export default IndexPage

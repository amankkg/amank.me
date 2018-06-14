import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const ContactsPage = () => (
  <div>
    <Helmet title="Contacts" />
    <h1>Contacts</h1>
    <p>email: amankubanchbek@gmail.com</p>
    <p>twitter: @amankkg</p>
    <p>github: @amankkg</p>
    <p>telegram: @amankkg</p>
    <p>skype: code4aman</p>
    <Link to="/">Homepage</Link>
  </div>
)

export default ContactsPage

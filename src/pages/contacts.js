import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components'

const ContactsPage = () => (
  <Layout>
    <Helmet title="Contacts" />
    <h1>Contacts</h1>
    <p>email: amankubanychbek@gmail.com</p>
    <p>twitter: @amankkg</p>
    <p>github: @amankkg</p>
    <p>telegram: @amankkg</p>
    <p>skype: code4aman</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default ContactsPage

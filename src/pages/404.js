import React from 'react'
import {styled} from 'linaria/react'

import {Layout} from '../components'

const NotFoundPage = () => (
  <Layout>
    <Centered>
      <h1>404</h1>
      <h1>¯\_(ツ)_/¯</h1>
    </Centered>
  </Layout>
)

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFoundPage

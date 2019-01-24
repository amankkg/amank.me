import React from 'react'
import styled from '@emotion/styled'

import { Layout } from '../components'

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <Layout>
    <Centered>
      <h1>404</h1>
      <h1>¯\_(ツ)_/¯</h1>
    </Centered>
  </Layout>
)

export default NotFoundPage

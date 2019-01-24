import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Link as RawLink } from './link'
import { Emoji } from './emoji'

const ParentDiv = styled.div`
  background: #0070bb;
  margin-bottom: 1.45rem;
`

const ChildDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  margin: 0;
`

const Link = styled(RawLink)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <ParentDiv>
    <ChildDiv>
      <H1>
        <Emoji label="waving hand" value="👋" />
        <Link to="/" text={siteTitle} />
      </H1>
    </ChildDiv>
  </ParentDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export { Header }

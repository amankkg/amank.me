import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Link } from './link'
import { Emoji } from './emoji'

const Header = ({ siteTitle }) => (
  <ParentDiv>
    <ChildDiv>
      <H1>
        <HeaderLink to="/">
          <Emoji label="waving hand" value="👋" />
          &nbsp;
          {siteTitle}
        </HeaderLink>
      </H1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <HeaderLink to="/cv/" text="CV" />
    </ChildDiv>
  </ParentDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export { Header }

const ParentDiv = styled.div`
  background: #0070bb;
  margin-bottom: 0.6rem;
`

const ChildDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.4rem 1.1rem;
`

const H1 = styled.h1`
  display: inline-block;
  margin: 0;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`

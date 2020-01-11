import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'linaria'
import {styled} from 'linaria/react'

import {Link} from './link'
import {Emoji} from './emoji'

const Header = ({siteTitle}) => (
  <ParentDiv>
    <ChildDiv>
      <H1>
        <Emoji label="waving hand" value="👋" />
        &nbsp;
        <Link to="/" text={siteTitle} className={linkClass} />
      </H1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/cv/" text="CV" className={linkClass} />
    </ChildDiv>
  </ParentDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export {Header}

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

// TODO: use styled(Link) https://github.com/silvenon/gatsby-plugin-linaria/issues/19#issuecomment-519432413
const linkClass = css`
  color: white;
  text-decoration: none;
`

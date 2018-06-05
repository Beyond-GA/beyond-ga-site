import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > Beyond GA
       
        </Link>

        <ul style={{ listStyle: 'none', float: 'right'}}>
        <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'large'}} to="/">Resources</Link></li>
        <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'large'}} to="/page-2">Community</Link></li>
        <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'large'}} to="/page-3">Our Team</Link></li>
        <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'large'}} to="/page-3">Contact</Link></li>
        <li style={{ display: 'inline-block', marginRight: '1rem'}}><Link style={{color: 'white', textDecoration: 'none', fontSize: 'large'}} to="/page-3">Contribute</Link></li>
      </ul>
      </h1>
    </div>
  </div>
)

export default Header

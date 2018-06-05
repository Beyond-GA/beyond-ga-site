import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >

    <h4>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > Beyond GA
       
        </Link>

      
      </h4>
     
  
      <h4 style={{ color: 'white', textDecoration: 'none' }}>
        Copyright 2018    

    </h4>
   
    </div>
  </div>
)

export default Footer

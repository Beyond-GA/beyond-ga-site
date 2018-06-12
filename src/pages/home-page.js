import React from 'react'
import Link from 'gatsby-link'
import HeroImage from '../components/HeroImage'

// insert home page code

const homePage = () => (
  <div>
    <h1>Homepage</h1>
    <p>This is homepage stuff.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default homePage


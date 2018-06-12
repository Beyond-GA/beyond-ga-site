import React from 'react'
import Link from 'gatsby-link'
import GridItem from '../components/new-component'

const SecondPage = () => (
  <div>
    <h1>Second Blog Post</h1>
    <p>Welcome to page 2</p>
    <Link to="/home-page/">Go back to the homepage</Link>
    <GridItem />
  </div>
)

export default SecondPage
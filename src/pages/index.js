import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Blog Post</h1>
    <p>Content of first blog post.</p>
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

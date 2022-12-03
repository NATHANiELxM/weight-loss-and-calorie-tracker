// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Track your weight loss:</p>
      
      
      <StaticImage
          alt="my kitty, around a year old"
          src="../images/my kitty.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
// I learned about it in Part 4!!
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
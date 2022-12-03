// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is my website for my fake <small>[for now]</small> company called Blue Team 
            Cyber Security! I am Nathaniel Murphy, a 28 year old Kentucky native, who will be graduating
            from EKU this Fall. This is a simple website showing some HTML, CSS, and JavaScript. 
            I will be able to contuously improve on this site if I have the free time to do so.</p>
      <StaticImage
          alt="my kitty, the first day she found me"
          src="../images/my kitty as a baby.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage
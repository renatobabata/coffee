import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffee Example" styleClass="default-background"/>
    <Info/>
    <Link to="/about">
      <button className="btn text-uppercase btn-yellow"> About</button>
    </Link>
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"default-background.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;



export default IndexPage

import React, { useEffect } from 'react'
import '../../styles/about/why.css'
import { useStaticQuery, graphql } from "gatsby"
import Whycover from './whycover.jpg'
import Aos from 'aos'

function Why() {
    const Why_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/about/why"}}}) {
        edges {
          node {
            frontmatter {
              title
              slogan
              image
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])


    const data = Why_Query?.allMarkdownRemark?.edges[0].node.frontmatter
    return (
        <div className="why">
            <div data-aos="fade-left"  className="whycont" >
                <h1 className="whyh1" >
                </h1>
                <p className="whyh2"> {data?.title} </p>
                <p className="whyp"> {data?.slogan} </p>
            </div>
            <img src={data?.image} className="whyimg" />
        </div>
    )
};

export default Why

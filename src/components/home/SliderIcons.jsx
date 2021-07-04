import React, { useState } from 'react'
import '../../styles/home/sliderIcons.css'

// import { SliderIcons } from './dummy-data/sliderIcons'
import { useStaticQuery, graphql } from "gatsby"

const SliderIcon = () => {
    const SliderIconsQuery = useStaticQuery(graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/slider"}}}) {
          edges {
            node {
              id
              frontmatter {
                SliderContent {
                  title
                  slogan
                  image
                  icon
                  color
                  backgroundColor
                }
                heading
                subHeading
                SliderIcons {
                  img
                }
              }
            }
          }
        }
      }
    `)

    const data = SliderIconsQuery?.allMarkdownRemark?.edges[0]?.node.frontmatter.SliderIcons
    const [icons, setIcons] = useState(data);

    return (
        <div className="sliderIcons__container">
            <div className="sliderIcons__wrapper">
                {icons.map((items, index) => {
                    return (
                        <img key={index} src={items.img} alt="icons" />
                    )
                })}
            </div>
        </div>
    )
}

export default SliderIcon

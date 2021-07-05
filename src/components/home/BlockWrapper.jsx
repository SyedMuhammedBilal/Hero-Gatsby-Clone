import React from 'react'
import Button from '../../Reusable-Components/Button'
import '../../styles/home/blockWrapper.css'
import { useStaticQuery, graphql } from "gatsby"

const BlockWrapper = () => {
    const Block_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/wrap"}}}) {
        edges {
          node {
            frontmatter {
              button
              title
              link
            }
          }
        }
      }
    }
  `)
  const data = Block_Query?.allMarkdownRemark?.edges[0]?.node;

    return (
        <div className="block__wrapper">
            <div className="block__wrapper-container">
                <div className="block__wrapper-title">
                    <p> {data?.frontmatter?.title} </p>
                </div>
                <div className="block__wrapper-button">
                    <a style={{textDecoration: 'none'}} href={data?.frontmatter?.link}>
                        <button>{data?.frontmatter?.button}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlockWrapper

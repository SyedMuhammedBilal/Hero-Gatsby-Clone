import React, { useState } from 'react'
import Heading from '../../Reusable-Components/Heading'

import '../../styles/home/vcCards.css'
import '../../styles/home/customerStories.css'
import {CardData} from './dummy-data/cardData'
import Arrow from '../../svgs/arrow'
import { useStaticQuery, graphql } from "gatsby"

const Cards = () => {
    const VC_Cards_Query = useStaticQuery(graphql`
        {
          allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/vc-cards"}}}) {
            edges {
              node {
                frontmatter {
                  heading
                  button
                  link
                  CardData {
                    title
                    icon
                    description
                  }
                  path
                }
              }
            }
          }
        }
    `)

    const data = VC_Cards_Query?.allMarkdownRemark?.edges[0]?.node
    const VcCards = VC_Cards_Query?.allMarkdownRemark?.edges[0]?.node.frontmatter.CardData

    const [card, setCard] = useState(VcCards)

    return (
        <div className="mb-20">
        <div className="mb-10">
            <Heading heading={data?.frontmatter?.heading} />
            
            {/* cards */}
            <div className="vc__cards-container">
                {card.map((items, index) => {
                    return (
                        <div key={index} className="vc__cards-wrapper">
                            <div className="vc__cards-img">
                                <img src={items.icon} />
                            </div>
    
                            <div className="vc__cards-h1">
                                <h1>{items.title}</h1>
                            </div>
    
                            <div className="vc__cards-p">
                                <p>{items.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        <div className="vc__cards-button">
        <a style={{textDecoration: 'none'}} href={data?.frontmatter?.link}>
                <button className="vc__cards-btn mt-10">
                  
                        {data?.frontmatter?.button}
                    <Arrow />
                </button> 
                </a>
                
        </div>
        </div>
    )
}

export default Cards

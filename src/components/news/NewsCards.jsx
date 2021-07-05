import React from 'react'
import '../../styles/news/newsCards.css'
import '../../styles/blog-list/blogCard.css'
import Arrow from '../../svgs/arrow'
import { useStaticQuery, graphql, Link } from "gatsby"

const NewsCards = () => {
    const Cards_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/blog-list/card-02"}}}
        sort: {fields: frontmatter___id}
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              subTitle
              image
            }
          }
        }
      }
    }
  `)

  const data = Cards_Query?.allMarkdownRemark?.edges

    return (
        <div>
            <div className="news__mainHeading mb-52 mt-10">
                    <h1>NEWSROOM</h1>
            </div>
            <div className="news__main">
                <div className="news__heading mb-10">
                    <h1>latest news</h1>
                </div>
              <ul className="news__cards">
                  {data?.map(({ node }, index) => {
                      return (
                        <li key={index} style={{cursor: 'pointer'}} className="news__cards_item">
                        <Link style={{textDecoration: 'none'}} to={"/news/" + node.frontmatter.slug} >
                            <div className="news__card">
                              <div className="news__card_image">
                                <img src={node?.frontmatter?.image} />
                              </div>
                              <div className="news__card_content">
                                <h2 className="news__card_title">{node?.frontmatter?.subTitle}</h2>
                                <p className="news__card_text">
                                    {node?.frontmatter?.title}
                                </p>
                                <p className="news__btn card_btn"> {node?.frontmatter?.date} </p>
                              </div>
                            </div>
                            </Link>
                        </li>
                        
                      )
                  })}
              </ul>
              <div className="blogCard-button">
                <button className="blogCard-btn mt-10">
                    load more
                </button> 
            </div>
            </div>
        </div>
    )
}

export default NewsCards

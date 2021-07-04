import React from 'react'
import '../../styles/home/Qoute.css'
import { useStaticQuery, graphql } from "gatsby"

const Qoute = () => {
  const QouteQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/qoute"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  const data = QouteQuery?.allMarkdownRemark?.edges[0]?.node

    return (
        <section style={{ overflowY: 'hidden' }} className="text-gray-600 body-font qoute__container">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-2/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed qoute__title mb-20">
                {data?.frontmatter?.title}
              </p>

              <h2 style={{ overflowY: 'hidden' }} className="font-medium title-font tracking-wider text-sm qoute__description mt-16">
                {data?.frontmatter?.description}
              </h2>
            </div>
          </div>
        </section>

    )
}

export default Qoute

import { graphql } from "gatsby"

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home/hero-section"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            title2
            slogan
            path
            images {
              img
            }
            video
            get_started_link
            watch_demo_link
          }
        }
      }
    }
  }
`
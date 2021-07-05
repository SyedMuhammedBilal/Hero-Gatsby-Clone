import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const BlogMainHeading = () => {
    const Blog_Main_Headong = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/blog-list/main-heading"}}}
      ) {
        edges {
          node {
            frontmatter {
              title1
              title2
              slogan
            }
          }
        }
      }
    }
  `)
	const data = Blog_Main_Headong?.allMarkdownRemark?.edges[0].node.frontmatter;

    return (
        <div data-aos='fade-right' style={{ textAlign: 'center' }} className="mt-40 mb-20">
					<h1 className="blockComponent__heading"> {data?.title1} </h1>
					<h1 className="blockComponent__heading">{data?.title2}</h1>

					<p className="blockComponent__para">{data?.slogan}</p>
				</div>
    )
}

export default BlogMainHeading

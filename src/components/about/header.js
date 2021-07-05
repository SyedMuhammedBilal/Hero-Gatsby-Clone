import React from 'react';
import '../../styles/about/header.css';
import { useStaticQuery, graphql } from "gatsby"

function Header() {
	const aboutHeaderQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/about/hero-section"}}}) {
        edges {
          node {
            frontmatter {
              title
			  image
            }
          }
        }
      }
    }
  `)
  const data = aboutHeaderQuery?.allMarkdownRemark?.edges[0]?.node?.frontmatter
	return (
		<div className="header">
			<img
				className="img"
				src={data?.image}
			/>
			<div className="headerPara">
				<h1>
					{data?.title}
				</h1>
			</div>
		</div>
	);
}

export default Header
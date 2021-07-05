import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/blog-post/header'

const BlogPost = ({ data }) => {
    return (
        <div>
            <Header slugData={data} />
        </div>
    )
}

export default BlogPost

export const query = graphql`
	query Header($slug: String) {
		markdownRemark(frontmatter: {slug: {eq: $slug}, path: {eq: "/blog-list/card-02"}}) {
					frontmatter {
						title
						date
						subTitle
						image
						background
					}
					html
			
		}
	}
`;
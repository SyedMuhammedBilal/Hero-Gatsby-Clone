import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/blog-post/header'
import Layout from './Layout'

const BlogPost = ({ data }) => {
    return (
        <Layout>
            <Header slugData={data} />
        </Layout>
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
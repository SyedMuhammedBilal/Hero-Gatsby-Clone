const path = require('path')

exports.createPages = async function ({ graphql, actions }) {
	const { data } = await graphql(`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/blog-list/card-02" } } }) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`);

    data.allMarkdownRemark.edges.forEach(edge => {
        actions.createPage({
            path: '/news/' + edge.node.frontmatter.slug,
            component: path.resolve('./src/template/blog-post.js'),
			context: {
				slug: edge.node.frontmatter.slug
			}
        })
    });
};

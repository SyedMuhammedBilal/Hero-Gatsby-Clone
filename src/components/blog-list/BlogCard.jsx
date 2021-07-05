import React, { useEffect } from 'react';
import Heading from '../../Reusable-Components/Heading';
import '../../styles/blog-list/blogCard.css';
import Arrow from '../../svgs/arrow';
import { useStaticQuery, graphql, navigate, Link } from 'gatsby';
import Aos from 'aos';

const BlogCard = () => {
	const BlogCardQuery = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { path: { eq: "/blog-list/card-02" } } }
				sort: { fields: frontmatter___id }
				limit: 2
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
	`);

	const data = BlogCardQuery?.allMarkdownRemark?.edges;

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<ul className="blogCard__cards">
			{data.map(({ node }, index) => {
				return (
					<li key={index} className="blogCard__cards_item">
						<Link
							style={{ textDecoration: 'none', overflowY: 'hidden' }}
							to={'/news/' + node.frontmatter.slug}
						>
							<div className="blogCard__card">
								<div className="blogCard__card_image">
									<img src={node.frontmatter.image} />
								</div>
								<div className="blogCard__card_content">
									<h2 className="blogCard__card_title">{node.frontmatter.subTitle}</h2>
									<p className="blogCard__card_text">{node.frontmatter.title}</p>
									<p className="blogCard__btn card_btn">{node.frontmatter.date}</p>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default BlogCard;

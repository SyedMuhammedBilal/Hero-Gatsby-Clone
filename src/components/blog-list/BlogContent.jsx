import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import Arrow from '../../svgs/arrow';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Aos from 'aos';

const BlogContent = () => {
	const Blog_Content = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/blog-list/content" } } }) {
				edges {
					node {
						frontmatter {
							heading
							slogan
							button
							link
						}
					}
				}
			}
		}
	`);

	const data = Blog_Content?.allMarkdownRemark?.edges[0].node.frontmatter;
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div>
			<div data-aos="fade-left" style={{ textAlign: 'center' }} className="mt-40 mb-20">
				<h1 className="blogCard__heading"> {data?.heading} </h1>
				<p className="blogCard__para"> {data?.slogan} </p>
			</div>

			<div className="blogCard__main">
				<BlogCard />
				<div className="blogCard-button">
					<a style={{ textDecoration: 'none' }} href={data?.link}>
						<button onClick={() => navigate('/news')} className="blogCard-btn mt-10">
							{data?.button}
							<Arrow />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogContent;

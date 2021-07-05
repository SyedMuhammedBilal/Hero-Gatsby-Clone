import React from 'react';
import Button from '../../Reusable-Components/Button';
import Heading from '../../Reusable-Components/Heading';
import Arrow from '../../svgs/arrow';
import { useStaticQuery, graphql } from 'gatsby';

import '../../styles/home/customerStories.css';

const CustomerStories = () => {
	const Customer_Stories = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/home/customer-stories" } } }) {
				edges {
					node {
						frontmatter {
							title
							slogan
							button
							link
						}
					}
				}
			}
		}
	`);

	const data = Customer_Stories?.allMarkdownRemark?.edges[0].node.frontmatter;

	return (
		<>
			<div>
				<Heading heading={data?.title} desc1={data?.slogan} />
			</div>
			<div className="customer__stories-button">
				<a style={{textDecoration: 'none'}} href={data?.link}>
					<button style={{ textDecoration: 'none' }} className="customer__stories-btn mt-10">
						{data?.button}
						<Arrow />
					</button>
				</a>
			</div>
		</>
	);
};

export default CustomerStories;

import React, { useEffect } from 'react';
import '../../styles/home/getStarted.css';
import { useStaticQuery, graphql } from 'gatsby';
import Aos from 'aos'

const GetStarted = () => {
	const GetStartedQuery = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/home/get-started" } } }) {
				edges {
					node {
						frontmatter {
							title
							subTitle
							para1
							para2
              para2Link
							icon
							heading
							image
							link
						}
					}
				}
			}
		}
	`);
	const data = GetStartedQuery?.allMarkdownRemark?.edges[0]?.node.frontmatter;
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<section style={{ overflowY: 'hidden' }} className="text-gray-600 body-font getStarted__container">
			<div data-aos="fade-up" className="container px-5 py-24 mx-auto">
				<div className="xl:w-2/2 lg:w-3/4 w-full mx-auto text-center">
					<div className="getStarted__icon">
						<img src={data?.image} />
					</div>

					<h2
						style={{ overflowY: 'hidden' }}
						className="font-medium title-font tracking-wider text-sm getStarted__description"
					>
						{data?.heading}
					</h2>

					<p className="getStarted__title">{data?.title}</p>
					<p className="getStarted__title">{data?.subTitle}</p>

					<div className="getStarted-button">
						<a style={{textDecoration: 'none'}} href={data?.link}>
							<button className="getStarted-btn mt-10">{data?.heading}</button>
						</a>
					</div>

					<div className="getStarted__end-slogan mt-10">
						<div className="getStarted__smallIcon">
							<img src={data?.icon} />
						</div>
						<div className="getStarted-paragraph">
							<p>{data?.para1}</p> <a href={data?.para2Link}>{data?.para2}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;

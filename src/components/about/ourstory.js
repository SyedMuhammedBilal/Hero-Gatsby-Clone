import React from 'react';
import OurValues from './ourvalues';
import { useStaticQuery, graphql } from 'gatsby';

function Ourstory() {
	const AboutValuesQuery = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/about/values" } } }) {
				edges {
					node {
						frontmatter {
							AboutContent {
								title
								left
								image
								description
							}
							slogan
						}
					}
				}
			}
		}
	`);

	const data = AboutValuesQuery?.allMarkdownRemark?.edges[0]?.node;
	console.log(data);

	return (
		<>
			{data?.frontmatter?.AboutContent.map((items, index) => {
				return !items.left ? (
					<section className="text-gray-600 body-font">
						<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
							<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
								<img
									className="object-cover object-center rounded"
									alt="hero"
									src={items && items.image}
								/>
							</div>
							<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
								<h1
									className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900"
									style={{ color: '#3b66ea' }}
								>
									{items?.title}
								</h1>
								<p
									className="mb-8 leading-relaxed"
									style={{ fontWeight: '500', fontSize: '20px', textAlign: 'left' }}
								>
									{items?.description}
								</p>
							</div>
						</div>
					</section>
				) : (
					<OurValues aboutData={items} aboutSlogan={data?.frontmatter?.slogan} />
				);
			})}
		</>
	);
}

export default Ourstory;

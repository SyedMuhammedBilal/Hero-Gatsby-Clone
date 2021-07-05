import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Feature = () => {
	const Press_Qoute_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { path: { eq: "/news/press-qoutes" } } }
				sort: { fields: frontmatter___id }
			) {
				edges {
					node {
						frontmatter {
							title
							PressQoutesData {
								title
								icon
							}
						}
					}
				}
			}
		}
	`);

  const data = Press_Qoute_Query?.allMarkdownRemark?.edges[0]

	return (
		<section className="text-white body-font" style={{ backgroundColor: '#7596e5' }}>
			<div className="container px-5 py-20 mx-auto">
				<div className="text-center mb-20">
					<h1 className="sm:text-5xl text-2xl font-medium title-font text-white">{data?.node.frontmatter.title}</h1>
				</div>
				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {data?.node?.frontmatter?.PressQoutesData.map((items, index) => {
                        return (
                            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div
                                    style={{ width: '10rem', overflowY: 'hidden' }}
                                    className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-10 flex-shrink-0"
                                >
                                    <img
                                        src={items.icon}
                                        style={{ width: '200px', height: '200px', overflowY: 'hidden' }}
                                        className="w-50 h-50"
                                        viewBox="0 0 50 50"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p
                                        style={{ fontWeight: 300, fontSize: '1.4rem' }}
                                        className="leading-relaxed text-base text-white"
                                    >
                                        {items.title}
                                    </p>
                                </div>
                            </div>     
                        )
                    })}
				</div>
			</div>
		</section>
	);
};

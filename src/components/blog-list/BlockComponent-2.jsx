import React from 'react';
import '../../styles/blog-list/blockComponent.css';
import { useStaticQuery, graphql, Link } from 'gatsby';
import MegaCard from './MegaCard';

const BlockComponent_2 = () => {
	const Block_Query_2 = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { path: { eq: "/blog-list/card-02" } } }
				sort: { fields: frontmatter___id }
				skip: 1
			) {
				edges {
					node {
						frontmatter {
							slug
							icon
							divClass
							aClass
							figureClass
							scriptSrc
							id
							div
							button
							cardBody
						}
					}
				}
			}
		} 
	`);

	console.log(Block_Query_2)

	const data = Block_Query_2?.allMarkdownRemark?.edges;

	return (
		<>
			{/* card 5 */}
			{/* <MegaCard /> */}
			{/* card 6 */}
			{data?.map(({ node }, index) => {
				const item = node?.frontmatter;
				return (
					<div className={item?.divClass}>
						{item?.div === false ? (
							<Link
							style={{textDecoration: 'none'}} to={"/news/" + item?.slug}
								
								className={item?.aClass}
								
							>
								{item?.cardBody && (
									<div className="card-body p-0 border-0 rounded-0 bg-transparent">
										<p className="card-title heading-xs mb-5" style={{ fontSize: '25px' }}>
											{item?.cardBody}
										</p>
									</div>
								)}

								{!item?.button === null ? (
									<div className="card-footer p-0 border-0 rounded-0 bg-transparent d-flex justify-content-between align-items-end">
										<p className="card-text eyebrow-sm mb-0">{item?.button}</p>
										<figure className={item?.figureClass}>
											<img
												src={item?.icon}
												className="c-img lazyloaded"
												alt
												data-ll-status="loaded"
											/>
											<noscript>
												&lt;img src={item?.icon}
												class="c-img" alt="" /&gt;
											</noscript>
										</figure>
									</div>
								) : (
									<figure className={item?.figureClass}>
										<img
											src={item?.icon}
											className="c-img lazyloaded"
											alt
											data-ll-status="loaded"
										/>
										<noscript>
											&lt;img src={item?.icon}
											class="c-img" alt="" /&gt;
										</noscript>
									</figure>
								)}
							</Link>
						) : (
							<div
								className={item?.aClass}
								href="https://www.usehero.com/customer-stories/how-annoushka-ducas-mbe-is-putting-omnichannel-service-at-the-heart-of-her-annoushka-jewelry-brand/"
								data-wpel-link="internal"
							>
								{item?.cardBody && (
									<div className="card-body p-0 border-0 rounded-0 bg-transparent">
										<p className="card-title heading-xs mb-5" style={{ fontSize: '25px' }}>
											{item?.cardBody}
										</p>
									</div>
								)}

								{item?.button !== null ? (
									<div className="card-footer p-0 border-0 rounded-0 bg-transparent d-flex justify-content-between align-items-end">
										<p className="card-text eyebrow-sm mb-0">{item?.button}</p>
										<figure className={item?.figureClass}>
											<img
												src={item?.icon}
												className="c-img lazyloaded"
												alt
												data-ll-status="loaded"
											/>
											<noscript>
												&lt;img src={item?.icon}
												class="c-img" alt="" /&gt;
											</noscript>
										</figure>
									</div>
								) : (
									<figure className={item?.figureClass}>
										<img
											src={item?.icon}
											className="c-img lazyloaded"
											alt
											data-ll-status="loaded"
										/>
										<noscript>
											&lt;img src={item?.icon}
											class="c-img" alt="" /&gt;
										</noscript>
									</figure>
								)}
							</div>
						)}
					</div>
				);
			})}
		</>
	);
};

export default BlockComponent_2;


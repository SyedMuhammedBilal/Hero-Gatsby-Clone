import React from 'react';
import '../../styles/news/newsCards.css';
import '../../styles/news/inTheNews.css';
import Arrow from '../../svgs/arrow';
import { useStaticQuery, graphql } from 'gatsby';

const InTheNews = () => {
	const News_Cards_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { path: { eq: "/news/news-cards" } } }
				sort: { fields: frontmatter___id }
			) {
				edges {
					node {
						frontmatter {
							heading
							NewsCards {
								title
								icon
								backgroundColor
							}
						}
					}
				}
			}
		}
	`);

	const data = News_Cards_Query?.allMarkdownRemark?.edges[0];

	return (
		<div className="container mt-20">
			<h4 className="heading-md text-5xl mb-7"> {data?.node?.frontmatter?.heading} </h4>
			<div className="in-the-news-row gap-x-0 row">
            {data?.node?.frontmatter?.NewsCards.map((items, index) => {
						return (
				<div className="col-in-the-news col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
					
							<div
								className="card card-in-the-news rounded text-white w-100"
								style={{ backgroundColor: items?.backgroundColor }}
							>
								<div className="p-5 bg-transparent border-0 rounded-0 pb-10">
									<img
										src={items?.icon}
										className="in-the-news-img"
										alt
									/>{' '}
								</div>
								<div className="bg-transparent rounded-0 border-0 font-size-xl pt-20 pb-10 px-5">
									<div style={{ fontWeight: '600' }} className="mb-2 pb-1">
										{items?.title}
									</div>
									<p className="mb-0 mt-6">
										<a
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												textTransform: 'uppercase',
												width: '10rem',
											}}
											className="btn btn-lg btn-outline-white link-with-arrow"
											href="https://www.voguebusiness.com/technology/vip-clienteling-gets-a-tech-makeover"
											target="_blank"
											data-wpel-link="external"
											rel="external noopener noreferrer"
										>
											Learn More
											<Arrow />
										</a>
									</p>
								</div>
							</div>
						
				</div>
                );
            })}
			</div>
		</div>
	);
};

export default InTheNews;

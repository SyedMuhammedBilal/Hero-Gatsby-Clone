import React from 'react';
import '../../styles/news/newsCards.css';
import '../../styles/news/toolkits.css';
import Arrow from '../../svgs/arrow';
import { useStaticQuery, graphql } from 'gatsby';

const Toolkits = () => {
	const Toolkits_Cards_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { path: { eq: "/news/toolkits" } } }
				sort: { fields: frontmatter___id }
			) {
				edges {
					node {
						frontmatter {
							title
							para
							image
							description
						}
					}
				}
			}
		}
	`);

	const data = Toolkits_Cards_Query?.allMarkdownRemark?.edges;

	return (
		<div className="mt-28 mb-28">
			<div style={{ textAlign: 'center', padding: 0 }} className="news__heading mb-10">
				<h1>HERO® TOOLKITS</h1>
			</div>

			<div className="toolkits__main">
				<ul className="toolkits__cards">
					{data?.map(({ node }, index) => {
						return (
							<li className="toolkits__cards_item">
								<div className="toolkits__card">
									<div className="toolkits__card_image">
										<img src={node?.frontmatter?.image} />
									</div>
									<div className="toolkits__card_content">
										<h2 className="toolkits__card_title">{node?.frontmatter?.title}</h2>
										<p className="toolkits__card_text">{node?.frontmatter?.description}</p>
										<p
											style={{ display: 'flex', textAlign: 'center', color: '#111' }}
											className="toolkits__btn card_btn"
										>
											{node?.frontmatter?.para} <Arrow />
										</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Toolkits;

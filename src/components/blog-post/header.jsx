import React from 'react';
import '../../styles/blog-post/header.css';
import Overlay from '../../svgs/overlay';
import { useStaticQuery, graphql, Link } from 'gatsby';
import About from './About';
import SocialLinks from './SocialLinks';

const Header = ({ slugData }) => {
	const { image, title, background } = slugData.markdownRemark?.frontmatter;

	const Links_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/links" } } }) {
				edges {
					node {
						frontmatter {
							link
							toLink
						}
					}
				}
			}
		}
	`);

	const data = Links_Query?.allMarkdownRemark?.edges;

	return (
		<>
			<div
				style={background ? { backgroundColor: background } : { backgroundColor: '#111' }}
				className="blog__post-header"
			>
				<div className="blog__post-image mt-14">
					<div className="blog__post-overlayImage mb-40">
						<Overlay fillData={background} />
						<img style={{ zIndex: 1 }} src={image} />
					</div>
				</div>
				<div className="blog__post-heading ">
					<p>{title}</p>
				</div>
			</div>
			<div className="vc_row wpb_row vc_row-fluid pt-lg-9 blog__post-mdHeading mt-28">
				<div className="wpb_column vc_column_container vc_col-sm-12">
					<div className="vc_column-inner">
						<div className="wpb_wrapper">
							<div className="wpb_text_column wpb_content_element ">
								<div style={{ textAlign: 'center' }} className="wpb_wrapper">
									<h2>{title}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container blog__post-mdContent mt-16 pb-4 article-post-default ">
				<section className="article-container">
					<section className="column-content">
						<div className="vc_row wpb_row vc_row-fluid">
							<div className="wpb_column vc_column_container vc_col-sm-12">
								<div className="vc_column-inner">
									<div className="wpb_wrapper">
										<div className="wpb_text_column wpb_content_element">
											<div
												style={{ fontSize: '18px', color: '#404040' }}
												className="wpb_wrapper  d-flex justify-center flex-col mb-10"
											>
												<div
													className="wpb_wrapper d-flex justify-center flex-col"
													dangerouslySetInnerHTML={{ __html: slugData?.markdownRemark?.html }}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
			<div className="post-bottom mt-10 container">
				<div className="row justify-content-between">
					<div className="col-md-4 col-lg-3 mb-6 mb-lg-0">
						<span className="d-block mb-2 opacity-45 text-gray-500" style={{ fontSize: '18px' }}>
							Spread the word:
						</span>
						{/* social links */}
						<SocialLinks />
						<div
							style={{ textDecoration: 'none' }}
							id="article-tag-cloud"
							className="article-tag-cloud mt-5"
						>
							<span
								style={{ color: 'grey', fontSize: '18px', letterSpacing: '1px' }}
								className="d-block mb-3 opacity-45"
							>
								Tags
							</span>
							{data?.map(({ node }, index) => {
								return (
									<>
										<a
											href={node?.frontmatter?.toLink}
											rel="tag"
											data-wpel-link="internal"
											className="text-gray-500 font-medium"
											style={{ letterSpacing: '1px' }}
										>
											{node?.frontmatter?.link}
										</a>
										<br />
									</>
								);
							})}
						</div>
					</div>
						<About />
				</div>
			</div>
		</>
	);
};

export default Header;
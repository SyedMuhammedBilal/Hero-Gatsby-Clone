import React, { useEffect } from 'react';
import '../../styles/about/team.css';
import Img from './my.jpeg';
import { useStaticQuery, graphql } from 'gatsby';
import Aos from 'aos'

function Teamprofile() {
	const Gallery_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/about/gallery" } } }) {
				edges {
					node {
						frontmatter {
							title
							desc
							GalleryData {
								image
								title
								description
							}
						}
					}
				}
			}
		}
	`);
	const data = Gallery_Query?.allMarkdownRemark?.edges[0];

	useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

	return (
		<div className="containers">
			<div data-aos="fade-up" className="teamheading">
				<h1>{data?.frontmatter?.title}</h1>
				<p>{data?.frontmatter?.desc}</p>
			</div>
			<div className="rowww">
				{/* Single Starts  */}
				{data?.node?.frontmatter?.GalleryData?.map((items, index) => {
					return (
						<div className="col-lg-4 col-md-6 teamCont">
							<div className="team__item set-bg" style={{ backgroundImage: `url('${items?.image}')` }}>
								<div className="team__text">
									<div className="team__title">
										<h4>{items?.title}</h4>
										<span>Web Developer</span>
									</div>
									<p>{items?.description}</p>
									<div className="team__social">
										<a href="#">
											<i className="fa fa-facebook" />
										</a>
										<a href="#">
											<i className="fa fa-twitter" />
										</a>
										<a href="#">
											<i className="fa fa-instagram" />
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Teamprofile;

import React, { useState, useEffect } from 'react';
import Button from '../../Reusable-Components/Button';
import Video from '../../video/heroVideo.mp4';
import '../../styles/home/hero.css';
import { iconsData } from './dummy-data/icons';
import BlockWrapper from './BlockWrapper';
import { Feature } from './Feature';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
	const HeroSectionQuery = useStaticQuery(graphql`
		query MyQuery {
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/home/hero-section" } } }) {
				edges {
					node {
						id
						frontmatter {
							title
							title2
							slogan
							path
							images {
								img
							}
							video
							get_started_link
							watch_demo_link
						}
					}
				}
			}
		}
	`);

	const imageQueryState = HeroSectionQuery?.allMarkdownRemark?.edges[0]?.node?.frontmatter?.images;
	const [iconState, setIconsState] = useState(imageQueryState);

	const data = HeroSectionQuery?.allMarkdownRemark?.edges[0]?.node;
	console.log(imageQueryState);

	return (
		<React.Fragment>
			<section className="hero__container">
				<div className="hero__titles">
					<h1>
						<span>{data.frontmatter.title}</span> <span>{data?.frontmatter?.title2}</span>
					</h1>
					<p className="hero__description">{data?.frontmatter?.slogan}</p>

					<div className="hero__buttons">
						<Button title="GET STARTED">
							<a style={{ textDecoration: 'none' }} href={data?.frontmatter?.get_started_link}></a>
						</Button>
						<Button title="watch demo" background>
							<a style={{ textDecoration: 'none' }} href={data?.frontmatter?.watch_demo_link}></a>
						</Button>
					</div>

					<div className="hero__imgs">
						{iconState.map((items, index) => {
							return (
								<div key={index} className="hero__img">
									<img src={items.img} alt="images" />
								</div>
							);
						})}
					</div>
				</div>
				<div className="hero__video">
				<video
						preload="auto"
						playsinline=""
						loop
						autoPlay
						muted
						poster="https://www.usehero.com/wp-content/uploads/2021/04/imgHeroMainPortrait@2x.jpg"
					>
						<source src={data?.frontmatter?.video} type="video/mp4" />
					</video>
				</div>
			</section>
			<BlockWrapper />
			<Feature />
		</React.Fragment>
	);
};

export default Hero;

// const [isDesktop, setDesktop] = useState(window.innerWidth > 900)

// const updateMedia = () => {
//     if (window !== "undefined") {
//         setDesktop(window.innerWidth > 1000);
//     } else { return null }
// };

// useEffect(() => {
//     window.addEventListener("resize", updateMedia);
// //     return () => window.removeEventListener("resize", updateMedia);
// });

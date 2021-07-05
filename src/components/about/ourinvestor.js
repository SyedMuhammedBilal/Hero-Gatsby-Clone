import React, { useEffect } from 'react';
import '../../styles/about/header.css';
import { useStaticQuery, graphql } from 'gatsby';
import Aos from 'aos'

function Ourinvestor() {
	const Investors_Query = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/about/investors" } } }) {
				edges {
					node {
						frontmatter {
							title
							slogan
							image
							description
							subHeading
							para
						}
					}
				}
			}
		}
	`);

	useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

	const data = Investors_Query?.allMarkdownRemark?.edges[0]?.node;

	return (
		<section className="text-gray-600 body-font" style={{ backgroundColor: '#eeeeee' }}>
			<div data-aos="fade-up" className="investorstitle">
				<h1 className="invh1"> {data?.frontmatter?.title} </h1>
				<h1 className="invh2"> {data?.frontmatter?.slogan} </h1>
			</div>
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<img className="object-cover object-center rounded" alt="hero" src={data?.frontmatter?.image} />
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<p
						className="mb-8 leading-relaxed"
						style={{ fontWeight: '500', fontSize: '15px', textAlign: 'left' }}
					>
						{' '}
						{data?.frontmatter?.description}{' '}
					</p>
				</div>
			</div>
			<div className="invtend">
				<div  data-aos="fade-right" className="invttitle">
					<div className="comma"> "</div>
					<h1> {data?.frontmatter?.subHeading} </h1>
					<p> {data?.frontmatter?.para} </p>
				</div>
			</div>
		</section>
	);
}

export default Ourinvestor;

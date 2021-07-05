import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Aos from 'aos'

function Viewjob() {
	const Job_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/about/job"}}}) {
        edges {
          node {
            frontmatter {
              slogan
              title
              button
              link
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])

  const data = Job_Query?.allMarkdownRemark?.edges[0].node?.frontmatter

	return (
		<section
			className="text-gray-600 body-font"
			style={{ backgroundColor: '#2863e9', paddingTop: '2%', paddingBottom: '3%' }}
		>
			<div data-aos="fade-right"  className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
					<h1
						className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
						style={{ color: 'white', fontSize: '35px', width: '70%' }}
					>
						{data?.title}
					</h1>
					<p className="mb-8 leading-relaxed" style={{ color: 'white' }}>
						{data?.slogan}
					</p>
					<div className="flex mt-6 justify-center">
						<a style={{textDecoration: 'none'}} href={data?.link}>
						<button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
							{data?.button}
						</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Viewjob;

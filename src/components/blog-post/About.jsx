import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"

const About = () => {
    const About_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/link/about"}}}) {
        edges {
          node {
            frontmatter {
              title
              description
              button
              link
            }
          }
        }
      }
    }
  `)

    const data = About_Query?.allMarkdownRemark?.edges[0].node.frontmatter
    console.log("About",data)

	return (
		<div className="col-lg-7">
			<div
				style={{ backgroundColor: '#fa3d3d' }}
				className="card card-post-about bg-red text-white w-100 pos-rel z-2"
			>
				<div style={{ padding: '50px' }} className="card-body border-0 rounded-0 bg-transparent pos-rel z-2">
					<div className="card-inner">
						<p className="eyebrow-xl font-size-xl mb-3" style={{ fontSize: '22px', fontWeight: '500' }}>
							{data?.title}
						</p>
						<div className="font-size-xl font-weight-regular">
							<p style={{ fontSize: '18px', fontWeight: '300' }}>
								{data?.description}
							</p>
						</div>
					</div>
				</div>
				<div
					style={{ paddingLeft: '50px', paddingBottom: '50px' }}
					className="card-footer border-0 rounded-0 bg-transparent pos-rel z-2"
				>
					<p className="mb-0">
						<a
							style={{ border: '3px solid #fff', textDecoration: 'none' }}
							className="btn btn-lg btn-outline-white link-with-arrow"
                            href={data?.link}
						>
							{data?.button}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

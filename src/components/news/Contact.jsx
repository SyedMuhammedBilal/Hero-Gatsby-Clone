import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
    const Contact_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/news/contact"}}}
        sort: {fields: frontmatter___id}
      ) {
        edges {
          node {
            frontmatter {
              title
              heading
              slogan
              email
              email2
            }
          }
        }
      }
    }
  `)

  const data = Contact_Query?.allMarkdownRemark?.edges[0]?.node?.frontmatter

	return (
		<div style={{backgroundColor: '#c29ce5'}} className="archive-inquiries pos-rel mt-32 z-5 bg-lilac section-dark text-white">
			<div className="container">
				<div className="py-20">
					<h1 style={{letterSpacing: '1px', fontWeight: '400'}} className="eyebrow-lg text-2xl mb-4">{data?.heading}</h1>
					<p style={{fontWeight: '400', letterSpacing: '0.5px'}} className="heading-sm text-3xl font-secondary text-transform-none font-weight-normal mb-8 mb-tb-5">
						    {data?.title}
						<a className="link-underline text-white link-white" href="mailto:press@usehero.com">
							{data?.email}
						</a>
						.
					</p>
					<p style={{fontWeight: '300'}} className="body-lg mt-10 font-secondary">
                            {data?.slogan}
						<a className="link-underline text-white link-white" href="mailto:hello@usehero.com<">
							{data?.email2}
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;

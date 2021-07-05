import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Button from '../../Reusable-Components/Button';


const FooterEmail = () => {
    const Footer_Email_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/footer/email"}}}) {
        edges {
          node {
            frontmatter {
              email
              button
              link
            }
          }
        }
      }
    }
  `)

  const data = Footer_Email_Query?.allMarkdownRemark?.edges[0]?.node?.frontmatter


	return (
		<>
			<h2
				style={{
					fontSize: '18px',
					fontWeight: '600',
					fontFamily:
						'Marr Sans Web, Helvetica Neue, HelveticaNeue-Light, Helvetica Neue Light, Helvetica, Arial, Lucida Grande, sans-serif',
				}}
				className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
			>
				CONTACT US
			</h2>
			<nav className="list-none mb-10">
				<li>
					<p> {data?.email} </p>
				</li>
				<li>
					<Button title={data?.button}>
                        <a href={data?.link}></a>
                    </Button>
				</li>
			</nav>
		</>
	);
};

export default FooterEmail;

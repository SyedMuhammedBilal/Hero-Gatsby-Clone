import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialLinks = () => {
	const Social_Links = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { path: { eq: "/social-links" } } }) {
				edges {
					node {
						frontmatter {
							link
						}
					}
				}
			}
		}
	`);

	const data = Social_Links?.allMarkdownRemark?.edges[0]?.node?.frontmatter;

	return (
		<aside className="social-share social-counter py-2 py-lg-0">
			<button
				className="btn btn-link btn-social btn-normal px-1 btn-share s_twitter"
				type="button"
				href={data?.link[0]}
			>
				<TwitterIcon style={{ fill: 'grey' }} />
				<span className="badge sr-only">0</span>
			</button>
			<button
				className="btn btn-link btn-social btn-normal px-1 btn-share s_linkedin"
				type="button"
				href={data?.link[1]}
			>
				<LinkedInIcon style={{ fill: 'grey' }} />
				<span className="badge sr-only">0</span>
			</button>
			<button
				style={{ color: 'grey' }}
				className="btn btn-social btn-normal px-1 btn-copy-clipboard text-transform-none font-weight-medium"
			>
				Copy Link
			</button>
		</aside>
	);
};

export default SocialLinks;

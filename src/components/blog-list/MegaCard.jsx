import React from 'react'
import '../../styles/blog-list/blockComponent.css';
import { useStaticQuery, graphql, Link } from 'gatsby';

const MegaCard = () => {
    const Mega_Card_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/blog-list/mega-card"}}}
        sort: {fields: frontmatter___id}
      ) {
        edges {
          node {
            frontmatter {
              slug
              icon
              button
              cardBody
            }
          }
        }
      }
    }
  `)
	const data = Mega_Card_Query?.allMarkdownRemark?.edges[0]
    console.log("mega card", data)

    return (
        <div
				style={{ padding: 0, border: '0.5px solid #d04021' }}
				className="item card-item d-flex item-157 col-md-6"
			>
				{/* div statement */}
				<Link
													style={{textDecoration: 'none'}} to={"/news/" + data?.node.frontmatter.slug}
                    
					className="card card-case-study text-white ft__lg text-center w-100 rounded-0 p-20"
					title="Herman Miller Group Extends High-Touch Service to Online Shoppers With HERO®"
					data-wpel-link="internal"
				>
					<figure className="card-case-img justify-content-center d-flex text-center mb-0 pb-4">
						<img
							src={data?.node?.frontmatter?.icon}
							className="c-img lazyloaded"
							alt
							data-ll-status="loaded"
						/>
						<noscript>
							&lt;img
							src={data?.node?.frontmatter?.icon}
							class="c-img" alt="" /&gt;
						</noscript>
					</figure>

					{/* checking slogan if statement here  */}

					<div className="card-body p-0 border-0 rounded-0 bg-transparent">
						<p className="card-title text-white heading-xs mb-5" style={{ fontSize: '25px', color: '#fff' }}>
							{data?.node?.frontmatter?.cardBody}
						</p>
					</div>

					{/* if button true else false */}
					<div className="card-footer p-0 border-0 rounded-0 bg-transparent">
						<p className="card-text eyebrow-sm mb-0"> {data?.node?.frontmatter?.button} </p>
					</div>
				</Link>
			</div>
    )
}

export default MegaCard

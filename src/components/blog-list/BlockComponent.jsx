import React, { useEffect } from 'react';
import '../../styles/blog-list/blockComponent.css';
import BlockComponent_2 from './BlockComponent-2';
import { useStaticQuery, graphql, Link } from "gatsby"
import Aos from 'aos'
import BlogMainHeading from './BlogMainHeading';

const BlockComponent = () => {

	const Block_Query_1 = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/blog-list/card-01"}}}
        sort: {fields: frontmatter___id}
      ) {
        edges {
          node {
            frontmatter {
              slug
              icon
              divClass
              aClass
              figureClass
              scriptSrc
              id
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
	Aos.init({ duration: 1000 })
}, [])

  const data = Block_Query_1?.allMarkdownRemark.edges
  
	return (
		<>
			<style
				type="text/css"
				dangerouslySetInnerHTML={{
					__html:
						'.item-157 .card{border-color:#d04021;background-color: #d04021}.item-157 .card:hover{border-color:#d04021;background-color: #d04021}.item-294 .card:hover{border-color:#20305d;background-color: #20305d}.item-304 .card:hover{border-color:#b56574;background-color: #b56574}',
				}}
			/>

			<div className="bg-black section-dark pb-11">
				<BlogMainHeading />
				<section id="customer-stories" className="blog-loop ajax-container container mb-20">
					<div className="row no-gutters gx-0 ajax-loop">
						<div className="w-100">
							<div className="row gx-0 no-gutters align-items-stretch">
								

								{/* card 5 */}
								<BlockComponent_2 />
							</div>
						</div>
					</div>
				</section>
				<style
					type="text/css"
					dangerouslySetInnerHTML={{
						__html:
							'.item-318 .card:hover{border-color:#192d4e;background-color: #192d4e}.item-194 .card:hover{border-color:#ffffff;background-color: #ffffff}.item-194 .card:hover .c-img{filter:invert(1)}.item-261 .card:hover{border-color:#ed6a2f;background-color: #ed6a2f}.item-327 .card:hover{border-color:#ffffff;background-color: #ffffff}.item-327 .card:hover .c-img{filter:invert(1)}.item-272 .card:hover{border-color:#e9ac4c;background-color: #e9ac4c}.item-1490 .card:hover{border-color:#061f5e;background-color: #061f5e}.item-227 .card:hover{border-color:#ffffff;background-color: #ffffff}.item-227 .card:hover .c-img{filter:invert(1)}.item-2888 .card:hover{border-color:#836e50;background-color: #836e50}.item-334 .card:hover{border-color:#4d637a;background-color: #4d637a}.item-1093 .card:hover{border-color:#ffffff;background-color: #ffffff}.item-1093 .card:hover .c-img{filter:invert(1)}.item-2895 .card:hover{border-color:#4c8791;background-color: #4c8791}.item-1600 .card:hover{border-color:#241f20;background-color: #241f20}.item-1682 .card:hover{border-color:#ffffff;background-color: #ffffff}.item-1682 .card:hover .c-img{filter:invert(1)}',
					}}
				/>{' '}
			</div>
		</>
	);
};

export default BlockComponent;

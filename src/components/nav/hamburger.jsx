import React, { useEffect } from 'react'
import '../../styles/nav/hamburger.css'
import { Link } from "gatsby"
import CancelIcon from '@material-ui/icons/Cancel';
import Aos from "aos"
import "aos/dist/aos.css"
import { useStaticQuery, graphql } from "gatsby"

let Hamburger = ({ clickFunc }) => {
    const Hamburger_Query = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/navbar"}}}) {
        edges {
          node {
            frontmatter {
              icon
              button
              link
            }
          }
        }
      }
    }
  `)

  const data = Hamburger_Query?.allMarkdownRemark?.edges[0].node?.frontmatter

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div data-aos="fade-left" data-aos-duration="2000" className="hamburger"  >

            <div className="hamMenu">
                <div className="logoDiv" >
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <img className="hamburgerLogo" src={data?.icon} alt="hero" />
                        {/* <Link  className="hamLogo" to='/' >Logo </Link> */}
                    </div>
                    <CancelIcon data-aos="fade-left" data-aos-duration="3000" onClick={clickFunc} style={{ fill: "white" }} />
                </div>
                <div className="menu-sub">

                    <ul data-aos="fade-left" data-aos-duration="3000" ><Link className="ul" to='/blog-list'>Customer Stories</Link></ul>

                    <ul data-aos="fade-left" data-aos-duration="3000"><Link className="ul" to='/aboutus'>About Us</Link></ul>
                </div>

            </div>

            <a style={{textDecoration: 'none'}} href={data?.link}> <button data-aos="fade-left" className="hamBut" data-aos-duration="3000" > {data?.button} </button></a>
        </div>


    )

}

export default Hamburger;
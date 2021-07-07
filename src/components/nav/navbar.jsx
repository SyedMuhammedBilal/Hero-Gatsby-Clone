import React, { useState } from 'react'
import { Link,useStaticQuery, graphql } from "gatsby"
import '../../styles/nav/nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import Hamburger from './hamburger'


const Navbar = () => {
    const [show, setShow] = useState(true)
    const Navbar_Query = useStaticQuery(graphql`
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
    const data = Navbar_Query?.allMarkdownRemark?.edges[0]?.node?.frontmatter
    const HamShow = () => {
        setShow(!show)
    }
    console.log(show)
    let url = 'https://i.pinimg.com/736x/8c/b0/8a/8cb08a963150553f12dc40795e5cb4a3.jpg'
    return (
        <>

            <div className={show ? "Navbar" : null} >
                <div className="logo" >
                    {!show ? null :
                        <Link to="/"> <img className="loogo" src={data?.icon} /></Link>

                    }

                </div>
                <div className="menu" >
                    <ul>
                        <Link to='/blog-list'> Customer Stories </Link>
                        <Link to='/aboutus'> About Us</Link>

                    </ul>
                    <div className="butDiv">
                        {!show ? null :
                        <a style={{textDecoration: 'none'}} href={data?.link}>
                            <button className="but" > {data?.button} </button> </a>}



                    </div>
                    {!show ? null :
                        <div onClick={HamShow} className="menuIcon" >
                            <MenuIcon />
                        </div>}
                </div>

                {!show && <Hamburger show={show} clickFunc={HamShow} />}


            </div>


        </>
    )
}

export default Navbar
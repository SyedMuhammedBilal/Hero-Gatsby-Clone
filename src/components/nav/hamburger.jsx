import React from 'react'
import '../../styles/nav/hamburger.css'
import { Link } from "gatsby"
import CancelIcon from '@material-ui/icons/Cancel';




let Hamburger = ({ clickFunc }) => {

    return (
        <div className="hamburger"  >

            <div className="hamMenu">
                <div className="logoDiv" >
                    <h3 className="hamLogo" >Logo </h3>
                    <CancelIcon onClick={clickFunc} style={{ fill: "white" }} />
                </div>
                <div className="menu-sub">

                    <ul  ><Link className="ul" to='/'>Customer Stories</Link></ul>

                    <ul ><Link className="ul" to='/'>About Us</Link></ul>
                </div>

            </div>

            <button className="hamBut" >GET STARTED</button>
        </div>


    )

}

export default Hamburger;

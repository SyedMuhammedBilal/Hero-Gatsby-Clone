import React from 'react'
import Nav from '../components/nav/navbar'
const Layout = ({ children }) => {
    return (
        <div>
            {/* insert Navbar here bro */}
            <Nav />
            {children}
            {/* insert Footer here bro */}
        </div>
    )
}

export default Layout

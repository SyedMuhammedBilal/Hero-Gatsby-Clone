import React from 'react'
import Footer from '../components/footer/footer'
import Nav from '../components/nav/navbar'
const Layout = ({ children }) => {
    return (
        <div>
            {/* insert Navbar here bro */}
            <Nav />
            {children}
            <Footer />
            {/* insert Footer here bro */}
        </div>
    )
}

export default Layout

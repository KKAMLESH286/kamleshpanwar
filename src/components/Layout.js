import React from 'react'
import DashBoard from './DashBoard'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}

import React from 'react'
import { ToastContainer } from 'react-toastify'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'

export default function DashBoard() {
    return (
        <div className="text-gray-400 bg-gray-900  body-font">
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
            <ToastContainer />
        </div>

    )
}

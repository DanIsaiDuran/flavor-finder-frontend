import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Outlet/>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout

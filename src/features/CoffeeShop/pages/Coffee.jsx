import React from 'react'
import Facility from '../components/Facility/Facility'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Menu from '../components/Menu/Menu'
import Navbar from '../components/Navbar/Navbar'
import Reviews from '../components/Reviews/Reviews'

const Coffee = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>

        <div>
            <Home />
            <Menu />
            <Facility />
            <Reviews />
            <Footer />
        </div>
    </div>
  )
}

export default Coffee
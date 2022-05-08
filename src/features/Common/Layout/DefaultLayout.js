import React from 'react'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout = ({ children }) => {
  return (
    <>
        <Header />
        <div className="mt-20">
            {children}
        </div>
        <Footer />
    </>
  )
}

export default DefaultLayout
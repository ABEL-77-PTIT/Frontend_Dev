import React from 'react'
import Header from "../components/header/Header"
import Company from '../components/company/Company'
import AllInOne from '../components/allInOne/AllInOne'
import Skilline from '../components/skilline/Skilline'
import SkillineDetails from '../components/skillineDetails/SkillineDetails'
import Features from '../components/features/Features'
import Integrations from '../components/integrations/Integrations'
import News from '../components/news/News'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Company />
      <AllInOne />
      <Skilline />
      <SkillineDetails />
      <Features />
      <Integrations />
      <News />
      <Footer />
    </>
  )
}

export default Home
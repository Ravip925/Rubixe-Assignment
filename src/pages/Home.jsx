import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import MiddleOne from '../components/MiddleOne'
import MiddleThree from '../components/MiddleThree'
import MiddleTwo from '../components/MiddleTwo'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Slider/>
        <MiddleOne/>
        <MiddleTwo/>
        <MiddleThree/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Home
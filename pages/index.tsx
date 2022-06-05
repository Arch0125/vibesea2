import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './api/components/Navbar'
import Homepage from './Homepage'

const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
    <Homepage/>
    </>
  )
}

export default Home

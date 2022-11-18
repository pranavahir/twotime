import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header/header'
import ProductsSection from './components/ProductsSection/productsSection'
import Footer from './components/Footer/footer'
export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        
      </Head>
      <Header/>
      <ProductsSection/>
      <Footer/>
    </div>
  )
}

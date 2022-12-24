import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar"
import Footer from "../comps/Footer"
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div >
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
      <Link className={styles.btn} href="/ninjas">See Ninja Listing </Link>
      
    </div>
    </>
  )
}

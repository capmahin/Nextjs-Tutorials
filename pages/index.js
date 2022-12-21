import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ex saepe qui, aut consequatur quos nam doloribus tempora, quidem debitis quae blanditiis veritatis harum, facilis omnis. Provident, velit. Sequi, minus?</p>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>

      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <h1>This is the beggining of a new World</h1>
      <ul>
        <li><Link  href='/about'>About</Link></li>
        <li><Link href='/portfolio'>Portfolio Page</Link></li>
        <li><Link href='/clients'>Clients</Link></li>
      </ul>
      <img src='/senku.jpeg'/>

      </main>
    </>
  )
}

import Link from "next/link"
import type { Metadata } from 'next'
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Welcome to my portfolio',
  description: 'This is the Home page for my portfolio',
}

export default function Home() {
  return (
    <main className="bg-pink-500">
<section className="flex-start flex-col paddings mb-16" >
<div >
  <Image alt="mei" src={`/mpho.jpg`} width={500} height={600}/>
</div>
  </section>
    </main>
  )
}

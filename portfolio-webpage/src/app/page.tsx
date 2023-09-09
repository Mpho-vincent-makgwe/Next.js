import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to my portfolio',
  description: 'This is the Home page for my portfolio',
}

export default function Home() {
  return (
    <main className="bg-pink-500">
<section className="flex-start flex-col paddings mb-16">
  
  <Link href={`/Resume`} className="rounded bg-gray-300 hover:bg-gray-500">View my Resume</Link>
  Home
  
  
  </section>

    </main>
  )
}

import type { Metadata } from 'next'
import Hero from "./components/Hero/Hero"

export const metadata: Metadata = {
  title: 'Welcome to my portfolio',
  description: 'This is the Home page for my portfolio',
}

export default function Home() {
  return (
    <main className="bg-gray-900 p-4 text-xl font-extrabold">
<section className="flex-start flex-col paddings mb-16" >
<div >
<Hero/>
</div>
  </section>
    </main>
  )
}

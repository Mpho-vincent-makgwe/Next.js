import FeaturedPosts from '@/componets/Home-Page/FeaturedPosts';
import Hero from '@/componets/Home-Page/Hero';
import { Fragment } from 'react'
import { getFeaturedPosts } from '@/lib/posts-utils';


const Home=({posts})=> {
  return (
    <>

      <Fragment>
        <main className={``}>
          <Hero/>
          <FeaturedPosts posts={posts}/>
        </main>
      </Fragment>
    </>
  )
}
export const getStaticProps = async () =>{
const fetured = getFeaturedPosts();
return {
  props:{
    posts: fetured
  },
  revalidate: 60
}
}
export default Home;

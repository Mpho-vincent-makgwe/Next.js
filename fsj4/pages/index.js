import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link';

const Home=(props)=> {
  const { products} = props;
  return (
    <>
    <ul>
      {products.map(product=><li key={product.id}><h4><Link href={`/${product.id}`}><b>{product.name}</b></Link></h4></li>)}
    </ul>
    </>
  )
}

export const getStaticProps = async (context) =>{
console.log('(Re-)Generatin...');
const filePath = path.join(process.cwd(), 'data','dummy-backend.json');//getting the file path of our data from our dummy-beckend file 
  const jsonData = await fs.readFile(filePath);//taking data from our dummy data using filePath.
  const data = JSON.parse(jsonData);//turning our data from dummy backend
  if(data.products.length === 0){
    return{notFound: true}
  }
  if(!data){
    return{
      redirect: {
        destination: '../example.js'
      }
    }
  }
  return{
    props:{
      products: data.products,
    },
    revalidate: 10,
    notFound: false
  };
}
export default Home;
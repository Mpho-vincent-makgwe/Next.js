import { Fragment } from "react";
import fs from "fs";
import path from "path";

const ProductDetailPage=(props)=>{
const { loadedProducts} = props;
if(!loadedProducts) {
    return(
        <p>loading...</p>
    )
}
    return(
<>
<Fragment>
    <h1>{loadedProducts.name}</h1>
    <hr/>
    <br/>
    <p><b><i>{loadedProducts.description}</i></b></p>
</Fragment>
</>
    )
}
const getData = async ()=>{
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}
export const getStaticProps = async (context)=>{
    const { params } = context;
    const productId = params.pid;
 const data = await getData();
    const product = data.products.find(product=>product.id === productId)
console.log(product);
if(!product) return{ notFound: true};
    return {
        props:{
            loadedProducts: product
        }
    }
};
export const getStaticPaths = async ()=>{
    const data = await getData();

    const ids = data.products.map(product=>product.id);
    const pathsWithParams = ids.map(id=>({params:{pid: id}}));
    return{
        paths: pathsWithParams,
        fallback: true,

    }

}
export default ProductDetailPage;
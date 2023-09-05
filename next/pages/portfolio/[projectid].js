import { useRouter} from 'next/router'

const PortfolioProjectPage =()=>{
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return(
        <>
        <h1>Project</h1>
        <p>It will be displayed by it's id</p>
        </>
    )}
    export default PortfolioProjectPage;
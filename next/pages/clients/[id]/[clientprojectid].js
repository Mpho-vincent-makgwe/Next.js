import {useRouter} from 'next/router'
const SelectedClientProjectPage=()=>{
    const rout = useRouter();
    console.log(rout.asPath);
    console.log(rout.pathname);
    console.log(rout.query);
    return(<>
    <h1>THE PROJECT PAGE FOR A SPECIFIC FOR A SELECTED client</h1>
    </>)
}

export default SelectedClientProjectPage;
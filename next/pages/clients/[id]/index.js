import {useRouter} from 'next/router'

const ClientProjectPage=()=>{
    const rout = useRouter();
    console.log(rout.asPath);
    console.log(rout.pathname);
    console.log(rout.query);
const loadProjectHandler =() =>{
    //load data
    rout.push('/clients/max/projecta')
}
    return(
        <>
        <h1>Client Projects or of a given Client</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
        </>
    )
}

export default ClientProjectPage;
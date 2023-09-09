import next from "next";
import Image from "next/image";
/*const getPostData = async() => {
        const res = await fetch("http://jsonplaceholder.typicode.com/posts")
        return res.json();
}*/
// const getUsersData = async() => {
//     const res = await fetch("http://jsonplaceholder.typicode.com/users", {
//         next: {
//             revalidate: 3
//         }
//     })
//     return res.json();
// }
const getDogData = async() => {
    const res = await fetch("http://dog.ceo/api/breeds/image/random", {
        cache: 'no-store'
    })
    return res.json();
}

const ListofpostPage = async() => {
// const [ user , dog] = await Promise.all([
//     getUsersData(),
//     getDogData()
// ])
// const [data,user] = await Promise.all([
//     getPostData(),
//     getUsersData()
// ])
// const user = await getUsersData();
const dog = await getDogData();
// console.log(user);
    return (
        <div>
            {/* <h1>Posts</h1>
            {data.map((post: any)=>{
            return <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
                </li>
            })} */}
            <h1>Users</h1>
            <Image src={dog.message} alt={dog.message} width={100} height={100}/>
            {/* {user.map((user: any)=>{
            return <li key={user.id}>
                
                <p>{user.name}</p>
                <p>{user.address.street}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                </li>
            })} */}
        </div>
    )
}

export default ListofpostPage

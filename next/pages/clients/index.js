import Link from "next/link";
const ClientPage =()=>{
    const clients = [
        { id: "max", name: "Maximilian" },
        { id: "manu", name: "Maria" },
        { id: "isac", name: "udemy" },
        { id: "john", name: "John" },
        { id: "jane", name: "Jane" },
        { id: "alex", name: "Alex" },
        { id: "sara", name: "Sara" },
        { id: "david", name: "David" },
        { id: "emily", name: "Emily" },
        { id: "chris", name: "Chris" },
        { id: "olivia", name: "Olivia" },
        { id: "michael", name: "Michael" },
        { id: "emma", name: "Emma" },
        { id: "ryan", name: "Ryan" },
        { id: "ava", name: "Ava" },
        { id: "william", name: "William" },
        { id: "mia", name: "Mia" },
        { id: "james", name: "James" },
        { id: "sophia", name: "Sophia" },
    ];
    
    return(
        <>
        <h2>The Client Page</h2>
    <ul>
  {clients.map((client)=>(
    <li key={client.id}>
        <Link href={{
            pathname: '/clients/[id]',
            query: {id: client.id}
        }}>{client.name}</Link>
        </li>
  ))}
  </ul>
        </>
    )
}

export default ClientPage;
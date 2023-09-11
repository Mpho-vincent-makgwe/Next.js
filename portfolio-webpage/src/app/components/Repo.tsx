import Link from "next/link";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const fetchRepo = async (repo:string)=>{
    const res = await fetch(`https://api.github.com/repos/Mpho-vincent-makgwe/${repo}`);
    return await res.json();
}
const Repo = async({repo}:any) => {
    const Rep = await fetchRepo(repo)
    console.log(Rep);
    return (
        <div key={Rep.id}>
        <div key={Rep.id} className={`bg-gray-100 p-4 m-2 rounded-lg shadow-md`}>
<Link href={`/Projects/[repo]`} as={`/Projects/${repo.name}` } className={`text-blue-500 hover:text-blue-700`}>
<p className={`font-bold text-2xl`}>{Rep.name}</p>
<p className={`text-gray-700`}>{Rep.description}</p>
<div className={`flex space-x-2 items-center text-gray-600`}>
  <span>
    <FaStar />{Rep.stargazers_count}
  </span>
  <span>
    <FaCodeBranch />{Rep.forks_count}
  </span>
  <span>
    <FaEye />{Rep.watchers_count}
  </span>
</div>
</Link>
</div>
        </div>
    )
}

export default Repo

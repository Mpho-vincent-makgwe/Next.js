import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

const getRepos = async()=>{
    const repos = await fetch('https://api.github.com/users/Mpho-vincent-makgwe/repos')
    return repos.json()
}
const ProjectsPage = async () => {
    const repos = await getRepos();
    return (
        <div>{repos.map((repo: any)=>{
            return(
                <div key={repo.id}>
                    <div key={repo.id} className={`bg-gray-100 p-4 m-2 rounded-lg shadow-md`}>
          <Link href={`/Projects/[repo]`} as={`/Projects/${repo.name}` } className={`text-blue-500 hover:text-blue-700`}>
            <p className={`font-bold text-2xl`}>{repo.name}</p>
            <p className={`text-gray-700`}>{repo.description}</p>
            <div className={`flex space-x-2 items-center text-gray-600`}>
              <span>
                <FaStar />{repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch />{repo.forks_count}
              </span>
              <span>
                <FaEye />{repo.watchers_count}
              </span>
            </div>
          </Link>
        </div>
                    </div>
            )
        })}</div>
    )
}
export default ProjectsPage

import ProfilePictur from "../components/Images/Profile"
import Contacts from "../components/ResumeDetails/Contacts/Contacts"
import AboutMe from "../components/ResumeDetails/About/AboutMe"
import Education from "../components/ResumeDetails/Education/Education"
import Skills from "../components/ResumeDetails/Skills/Skills"
import Projects from "../components/ResumeDetails/Achievements/Projects"
import Interests from "../components/ResumeDetails/Interests/Interests"
import type { Metadata } from "next"
/*import Fonts */
import { Montserrat } from 'next/font/google'
const monsFont = Montserrat(
    {
        subsets: ["latin-ext"],
        variable: "--font-mont"
    }
);
export const metadata: Metadata = {
    title: 'Resume',
    description: 'View My Resume and Give Feedback',
  }
  
export default function Resume() {
    return (
      <>      <div className={`${monsFont.variable}font-mont  tracking-tighter scroll-p-96 border-b-violet-700 border-l-sky-600 text-neutral-50  p-4 m-2 rounded-lg shadow-md bg-slate-600`} >
        <div className="bg-slate-500 rounded-3xl"><ProfilePictur /></div>
           
     <div className="flex rounded-md bg-gray-700">
        <div className="w-1/2  text-freen justify-center">
          
          <AboutMe/>
           <Contacts />
           <Interests/>
        </div>
        <div className="w-1/2 ">
          <Education/>
          <Skills/>
          <Projects/>
        </div>
      </div>
      </div></>

    )
  }
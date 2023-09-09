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
      
      <div className={`${monsFont.variable} font-mont bg-gray-500 p-4 m-2 rounded-lg shadow-md`}>
           <ProfilePictur />
     <div className="flex">
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
      </div>
    )
  }
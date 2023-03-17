import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import profilePic from "../public/profilePic.png"

const Profile: React.FC = () => {
  const frontendSkills: string[] = ["HTML5", "CSS3", "React", "Tailwind CSS", "Material UI", "Unit Testing"];
  const backendSkills: string[] = ["Node.JS", "MongoDB", "Express JS", "Git"];
  const programmingLanguages: string[] = ["JavaScript", "TypeScript", "Python"];

  return (
    <section className="text-center mt-10">
      <h1 className="text-5xl mb-3 text-teal-700 font-medium dark:text-teal-400">Karun Krishnan</h1>
      <h2 className="text-2xl mb-5 dark:text-slate-100">Full Stack Developer</h2>
      <p className="text-lg text-gray-800 leading-8 mx-auto max-w-2xl dark:text-slate-100">
        I create responsive websites and web applications. Let me help you
        deliver a high-quality web project that meets modern web standards and
        provides an optimal user experience.
      </p>

      <div className="bg-gradient-to-b from-teal-600 h-80 w-80 mx-auto mt-10 rounded-full relative overflow-hidden">
        <Image src={profilePic} alt="Profile Picture"/>
      </div>

      <div className="mt-12">
        <ul className="flex justify-center items-center mb-7">
          <span className="mr-2 dark:text-slate-100">Frontend Skills</span>
          {frontendSkills.map((skill : string, index : number) => <li key={index} className="text-white text-sm mx-1.5 cursor-default rounded-md bg-green-600 hover:bg-teal-700 transition px-2 py-1 dark:hover:bg-green-500">{skill}</li>)}
        </ul>
        <ul className="flex justify-center items-center mb-7">
          <span className="mr-2 dark:text-slate-100">Backend Skills</span>
          {backendSkills.map((skill : string, index : number) => <li key={index} className="text-white text-sm mx-1.5 cursor-default rounded-md bg-green-600 hover:bg-teal-700 transition px-2 py-1 dark:hover:bg-green-500">{skill}</li>)}
        </ul>
        <ul className="flex justify-center items-center mb-7">
          <span className="mr-2 dark:text-slate-100">Languages</span>
          {programmingLanguages.map((skill : string, index : number) => <li key={index} className="text-white text-sm mx-1.5 cursor-default rounded-md bg-green-600 hover:bg-teal-700 transition px-2 py-1 dark:hover:bg-green-500">{skill}</li>)}
        </ul>
      </div>

      <div className="flex justify-center text-3xl gap-8 mt-10 text-gray-600 dark:text-slate-100">
        <BsLinkedin className="hover:text-gray-900 transition cursor-pointer dark:hover:text-slate-400" />
        <BsGithub className="hover:text-gray-900 transition cursor-pointer dark:hover:text-slate-400" />
      </div>

    </section>
  );
};

export default Profile;

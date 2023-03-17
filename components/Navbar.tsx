import React, { SetStateAction } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  const name: string = "<karun krishnan>";

  return (
    <nav className="flex justify-between">
      <h1 className="text-2xl cursor-default dark:text-slate-100">{name}</h1>
      <ul className="flex items-center gap-12">
        <li className="cursor-pointer text-2xl" onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? (
            <BsFillMoonStarsFill className=" text-gray-600 hover:text-gray-900 transition" />
          ) : (
            <BsFillSunFill className=" text-slate-100 hover:text-slate-400 transition" />
          )}
        </li>
        <li>
          <a
            className="text-xl bg-gradient-to-r from-green-500 to-green-700 px-4 py-2 text-white rounded-md"
            href="#"
          >
            MY RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between mx-10 mt-20 pb-5 dark:text-slate-100">
      <h1>Made with React, Typescript & Tailwind CSS</h1>
      <h1>Copyright © 2023 <span className="text-teal-400">Karun Krishnan.</span> All rights reserved.</h1>
    </footer>
  );
};

export default Footer;

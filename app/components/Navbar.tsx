import { useState } from "react";
import Image from "next/image";
import navbarlogo from "../../public/navbar-logo.svg";
import navbarbuttom from "../../public/navbar-buttom.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center justify-between mb-24 xl:mb-48">
          <div className="flex items-center mb-10 lg:mb-0">
            <Image width="62" height="62" src={navbarlogo} alt="Logo" />
            <button
              className="w-10 h-10 lg:hidden ml-auto flex items-center justify-center rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
              >
              <Image width="62" height="62" src={navbarbuttom} alt="Logo" />
              <i className="feather-menu"></i>
            </button>
          </div>
          <ul
            className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0 ${
              navbarOpen ? "flex" : "hidden"
            }`}
            >
            <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Obejetivo</a>
            </li>
            <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">serviços</a>
            </li>
            <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Sobre mim</a>
            </li>
            <li className="px-8 py-3 font-medium text-pink-800 text-lg text-center border-2 border-pink-800 rounded-md hover:bg-pink-800 hover:text-white transition ease-linear duration-300">
              <a href="#">Contate-me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

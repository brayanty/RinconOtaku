import { useRef, useState } from "react";
import useViewMenu from "./useViewMenu";
import Settings from "../settings/settings.jsx"
import useVisible from "../hooks/visible/visible.js";

/* From Uiverse.io by geekgao */

function Navbar() {
  const subMenuRef = useRef(null);
  const [navHeight, setNavHeight] = useState(" ");
  
  const [ isSubMenu, setIsMenuOpen, menuRef ] = useViewMenu();
  const [isOpen, setIsOpen] = useVisible()
  

  const menuVisible = () => {
    setNavHeight(subMenuRef.current.clientHeight + "px");
    setIsMenuOpen(true);
  };

  const settingsVisible = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <div
      ref={subMenuRef}
      className="relative flex items-center justify-between bg-dark-background/30 bg-opacity-50 backdrop-blur-md rounded-full px-6 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:bg-opacity-90 z-30"
    >
      <button className="hover:text-white hover:bg-black p-2 transition-all duration-200 ease-in-out text-gray-900 bg-gray-200 hover:shadow-md rounded-full">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button className="hover:text-white hover:bg-black p-2 transition-all duration-200 ease-in-out text-gray-900 bg-gray-200 hover:shadow-md rounded-full">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {isOpen && <Settings />}
      {isSubMenu && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            bottom: navHeight,
            right: "1rem",
          }}
          className="font-semibold bg-gray-800 border dark:border-none shadow-lg text-white bg-opacity-90 backdrop-blur-md w-32 rounded-md p-2"
        >
          <ul className="flex flex-col ">
            <li className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Login
            </li>
            <li onClick={settingsVisible} className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Settings
            </li>
            <li className="hover:bg-gray-200 rounded-md hover:text-black cursor-pointer p-2">
              Premium
            </li>
          </ul>
        </div>
      )}

      <button
        onClick={menuVisible}
        className="hover:text-white hover:bg-black p-2 transition-all duration-200 ease-in-out text-gray-900 bg-gray-200 hover:shadow-md rounded-full"
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;

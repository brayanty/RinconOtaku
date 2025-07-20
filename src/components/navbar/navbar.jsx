import { faEnvelope, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/rin tohsaka.jpg";
import OnDark from "../hooks/darkMode/onDark";
import useDarkMode from "../hooks/darkMode/darkMode";

{/* Navbar */}

function Navbar() {
  const darkMode = useDarkMode();

  return (
    <nav className="max-h-screen flex flex-col justify-between w-1/4 p-4">
      <div className="dark:bg-dark-background bg-navbar-light p-4 rounded-md hover:animate-pulse cursor-pointer ">
        <h1 className="text-white text-lg font">Rincon Otaku</h1>
      </div>
      <ul className="justify-self-center pl-2 space-y-2">
        <li className="hover:bg-primary/40 hover:text-white hover:dark:bg-primary hover:shadow-2xl shadow-white max-h-[content-box] p-2 rounded-lg cursor-pointer">
          <a className="flex items-center gap-2" href="#profile">
            <FontAwesomeIcon icon={faUser} size="2x" />
            {" Perfil"}
          </a>
        </li>
        <li className="hover:bg-primary/40 hover:text-white hover:dark:bg-primary hover:shadow-2xl shadow-white max-h-[content-box] p-2 rounded-lg cursor-pointer">
          <a className="flex items-center gap-2" href="#Inbox">
            <FontAwesomeIcon icon={faInbox} size="2x" />
            {" Notificationes"}
          </a>
        </li>
        <li className="hover:bg-primary/40 hover:text-white hover:dark:bg-primary hover:shadow-2xl shadow-white max-h-[content-box] p-2 rounded-lg cursor-pointer">
          <a className="flex items-center gap-2" href="#messages">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            {" Mensajes"}
          </a>
        </li>
        <li>
          <OnDark onClick={darkMode} />
        </li>
      </ul>
      {/* "user setion" */}
      <div className="flex justify-center items-center gap-2">
        <figure className="w-12 h-12 rounded-full shadow-sm shadow-blue-200 overflow-hidden">
          <img className="w-full h-full" src={profile} alt="Fundador" />
        </figure>
        <div>
          <h4 className="font-primarybold">Brayan Palacios</h4>
          <p>@elbrayanp</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

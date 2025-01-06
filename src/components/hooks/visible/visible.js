import { useEffect, useState } from "react";

/* Con este componete se pretende reutilizar la logica para desaparecer y aparecer otros elementos */

function useVisible() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = () => {
      close();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return [isOpen, setIsOpen];
}

export default useVisible;

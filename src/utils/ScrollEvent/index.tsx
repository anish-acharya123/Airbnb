import { useState, useEffect } from "react";

const useScroll = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScroll;
};

export default useScroll;

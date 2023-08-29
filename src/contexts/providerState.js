"use client";
import { createContext, useContext, useState, useEffect } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [linkActive, setLinkActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const nowYear = new Date().getFullYear();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelLinkActive = (e) => {
    setLinkActive((prev) => (prev = e.target.text.toLowerCase()));
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        linkActive,
        setLinkActive,
        handelLinkActive,
        scrolled,
        nowYear,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);

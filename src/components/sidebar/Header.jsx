"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavBar from "../navbar/NavBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={`w-full h-14 items-center bg-contrast flex justify-between px-5 ${toggle?' ':' mb-5'}`}>
        <div className="my-3 gap-2 flex items-center z-20">
          <img alt="logo" src="/logo-alt.png" className="w-10 h-10" />
          <span className="font-bold">Convergeifi</span>
        </div>
        {toggle ? (
          <HiX onClick={() => setToggle(!toggle)} className="w-6 z-20 h-6" />
        ) : (
          <HiMenu onClick={() => setToggle(!toggle)} className="w-6 z-20 h-6" />
        )}
      </div>
      {toggle ? <NavBar toggleHeader={toggle} /> : <></>}
    </>
  );
};

export default Header;

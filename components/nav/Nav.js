import React, { useState, useRef } from "react";

import About from "../../public/assets/about";
import Home from "../../public/assets/home";
import Contact from "../../public/assets/contact";
import Portfolio from "../../public/assets/portfolio";
import Skills from "../../public/assets/skills";
import MenuIcon from "../../public/assets/menu_icon";

import Link from "next/link";

const Nav = ({ page, loading }) => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  const toogleMenu = () => {
    if (menu) {
      menuRef.current.style.transform = "translateY(0px)";
    } else {
      menuRef.current.style.transform = "translateY(65px)";
    }
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="topbar">
        <Link href="/">
          <div className="logo">
            <img src={require("../../public/assets/venazlogo.png")} />
          </div>
        </Link>
        <div onClick={toogleMenu}>
          <MenuIcon active={menu} />
        </div>
      </div>
      <div className="main-nav" ref={menuRef}>
        <div className="logo"></div>
        <div className="navigation">
          <Link href="/">
            <div onClick={toogleMenu}>
              <div className="icon">
                <Home page={page} />
              </div>
              <p>HOME</p>
            </div>
          </Link>
          <Link href="/about">
            <div onClick={toogleMenu}>
              <div className="icon">
                <About page={page} />
              </div>
              <p>ABOUT</p>
            </div>
          </Link>
          <Link href="/skills">
            <div onClick={toogleMenu}>
              <div className="icon">
                <Skills page={page} />
              </div>
              <p>SKILLS</p>
            </div>
          </Link>
          <Link href="/portfolio">
            <div onClick={toogleMenu}>
              <div className="icon">
                <Portfolio page={page} />
              </div>
              <p>WORKS</p>
            </div>
          </Link>
          <Link href="/contact">
            <div onClick={toogleMenu}>
              <div className="icon">
                <Contact page={page} />
              </div>
              <p>CONTACT</p>
            </div>
          </Link>
        </div>
        <div className="socials"></div>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";

import About from "../../public/assets/about";
import Home from "../../public/assets/home";
import Contact from "../../public/assets/contact";
import Portfolio from "../../public/assets/portfolio";
import Skills from "../../public/assets/skills";

import Link from "next/link";

const Nav = ({ page, loading }) => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="navigation">
        <Link href="/">
          <div onClick={loading}>
            <div className="icon">
              <Home page={page} />
            </div>
            <p>HOME</p>
          </div>
        </Link>
        <Link href="/about">
          <div onClick={loading}>
            <div className="icon">
              <About page={page} />
            </div>
            <p>ABOUT</p>
          </div>
        </Link>
        <Link href="/skills">
          <div onClick={loading}>
            <div className="icon">
              <Skills page={page} />
            </div>
            <p>SKILLS</p>
          </div>
        </Link>
        <div>
          <div className="icon">
            <Portfolio page={page} />
          </div>
          <p>WORKS</p>
        </div>
        <Link href="/contact">
          <a>
            <div>
              <div className="icon">
                <Contact page={page} />
              </div>
              <p>CONTACT</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="socials"></div>
    </nav>
  );
};

export default Nav;

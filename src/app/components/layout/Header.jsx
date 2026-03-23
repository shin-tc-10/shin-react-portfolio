"use client"

import React, { useState } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link"

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <NextLink href="/" smooth={true} duration={500}>ホーム</NextLink>
        <Link to="works" smooth={true} duration={500}>制作物</Link>
        <Link to="contact" smooth={true} duration={500}>GitHub</Link>
        <Link to="selfStudy" smooth={true}  duration={500}>自己学習</Link>
        <Link to="skills" smooth={true}  duration={500}>スキル</Link>
        <Link to="qualifications" smooth={true} duration={500}>資格</Link>
        <Link to="about" smooth={true}  duration={500}>自己紹介</Link>
      </nav>
    </header>
  );
}

export default Header;

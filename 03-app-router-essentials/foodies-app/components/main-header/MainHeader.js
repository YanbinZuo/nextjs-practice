import React from "react";
import MainHeaderBackground from "./MainHeaderBackground";
import classes from "./styles/MainHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <headers className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </headers>
    </>
  );
}

export default MainHeader;

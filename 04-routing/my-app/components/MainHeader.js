"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavLink from './NavLink';

function MainHeader({params}) {
  const path = usePathname();
  console.log("path: ", path)
  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
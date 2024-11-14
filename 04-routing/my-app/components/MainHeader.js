import Link from 'next/link'
import React from 'react'

function MainHeader() {
  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <nav className="bg-blue-500 py-4 fixed top-0 w-full z-50 ">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-white font-bold text-xl">Resume</a>
      <div className="flex space-x-4">
        <Link href="#Profile" className="text-white hover:bg-blue-600 px-2 py-1 rounded">Profile</Link>
        <Link href="#Education" className="text-white hover:bg-blue-600 px-2 py-1 rounded">Education</Link>
        <Link href="#Projectwork" className="text-white hover:bg-blue-600 px-2 py-1 rounded">Projectwork</Link>
      </div>
    </div>
  </nav>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom';

const NavbarSection = ({change}) => {
  return (
    <section>
        <header className="text-gray-600 body-font bg-BgColor">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-950 mb-4 md:mb-0">
    <span className="ml-3 text-5xl">Portofolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
  <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
  <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
  <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
</nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    onClick={change}>button
    </button>
  </div>
</header>
    </section>
  )
}

export default NavbarSection

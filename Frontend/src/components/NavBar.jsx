import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-white/70 rounded-xl mt-5 mx-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-purple-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white/50 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600">
        <li><a>Track Skills</a></li>
        <li>
          <a>Develop New Skill</a>
          <ul className="p-2">
            <li><a>Explore Skills</a></li>
            <li><a>Test Yourself</a></li>
          </ul>
        </li>
        <li><a>Join Community</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-purple-500 font-[Diphylleia]">LiftUP</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-600">
      <li><a>Track Skills</a></li>
      <li>
        <details>
          <summary>Develop New Skill</summary>
          <ul className="p-2 bg-white/50">
            <li><a>Explore Skills</a></li>
            <li><a>Test Yourself</a></li>
          </ul>
        </details>
      </li>
      <li><a>Join Community</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-purple-300  border-purple-800 border-2 shadow-lg text-gray-600 pr-4 hover:bg-purple-500">Login</a>
  </div>
</div>
  )
}

export default NavBar

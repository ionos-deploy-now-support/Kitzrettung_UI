import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function MobileMenu({visible}) {
  if (visible) {
    return (
    <div className='h-screen w-screen fixed top-0 bg-[#102613] text-white py-40 px-20'>
      <Link to="/" className="hover:cursor-pointer"><img src={logo}className="w-28 mb-12"/></Link>
     <ul>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointe group">
          <Link to="/about" className='hover:text-second'>ÜBER UNS</Link>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/motivation" className='hover:text-second hover:cursor-pointer'>Unsere Motivation</NavLink></li>
            <li><NavLink to="/verein" className='hover:text-second hover:cursor-pointer'>Unser Verein</NavLink></li>
            <li><NavLink to="/arbeit" className='hover:text-second hover:cursor-pointer'>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>LEISTUNGEN</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/verfahren" className='hover:text-second hover:cursor-pointer'>Verfahren</NavLink></li>
            <li><NavLink to="/rechtliches" className='hover:text-second hover:cursor-pointer'>Rechtliches</NavLink></li>
            <li><NavLink to="kosten" className='hover:text-second hover:cursor-pointer'>Kosten</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>WISSENSWERTES</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/biologie" className='hover:text-second hover:cursor-pointer'>Biologie</NavLink></li>
            <li><NavLink to="/technik" className='hover:text-second hover:cursor-pointer'>Technik</NavLink></li>
            <li><NavLink to="/galerie" className='hover:text-second hover:cursor-pointer'>Galerie</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/blog" className="font-avenirHeavy mb-12 hover:text-second hover:cursor-pointer">BLOG</NavLink></li>
     </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
  </div>
  )}
}

export default MobileMenu;
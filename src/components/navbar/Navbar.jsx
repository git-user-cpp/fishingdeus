import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';

/*
  Copyright 2023 Andrew Kushyk

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const Navbar = () => {
  const location = useLocation();
  const prevScrollPosRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = prevScrollPosRef.current > currentScrollPos;

    prevScrollPosRef.current = currentScrollPos;
    setIsVisible(isVisible);
  };  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'navbar_show' : 'navbar_hide'}`}>

      <Link to="/" className='site_title'>
        FishingDeus
      </Link>

      {/* Mobile Menu */}
      <ul className="menu_mobile">
        <Link to="/fishingpedia">
          <li className={`${location.pathname === '/fishingpedia' ? 'active' : ''}`}>
            FishingPedia
          </li>
        </Link>
        <Link to="/map">
          <li className={`${location.pathname === '/map' ? 'active' : ''}`}>
            Map
          </li>
        </Link>
        <Link to="/news">
          <li className={`${location.pathname === '/news' ? 'active' : ''}`}>
            News
          </li>
        </Link>
        <Link to="/blog">
          <li className={`${location.pathname === '/blog' ? 'active' : ''}`}>
            Blog
          </li>
        </Link>
        <Link to="/register">
          <li className={`${location.pathname === '/register' ? 'active' : ''}`}>
            Register
          </li>
        </Link>
      </ul>

      {/* Regular menu */}
      <ul className='menu'>
        <Link to="/fishingpedia">
          <li className={`btn ${location.pathname === '/fishingpedia' ? 'active' : ''}`}>
            FishingPedia
          </li>
        </Link>
        <Link to="/map">
          <li className={`btn ${location.pathname === '/map' ? 'active' : ''}`}>
            Map
          </li>
        </Link>
        <Link to="/news">
          <li className={`btn ${location.pathname === '/news' ? 'active' : ''}`}>
            News
          </li>
        </Link>
        <Link to="/blog">
          <li className={`btn ${location.pathname === '/blog' ? 'active' : ''}`}>
            Blog
          </li>
        </Link>
        <Link to="/register">
          <li className={`btn ${location.pathname === '/register' ? 'active' : ''}`}>
            Register
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
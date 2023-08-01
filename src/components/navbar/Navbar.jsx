import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

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

  return (
    <nav className='navbar'>
      <Link to="/home" className='site-title'>
        FishingDeus
      </Link>
      <ul className='menu'>
        <li className={`btn ${location.pathname === '/blog' ? 'active' : ''}`}>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
            Blog
          </Link>
        </li>
        <li className={`btn ${location.pathname === '/register' ? 'active' : ''}`}>
          <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
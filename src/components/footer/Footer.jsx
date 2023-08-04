import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { AiOutlineCopyright } from 'react-icons/ai'
import { TbMailForward } from 'react-icons/tb'
import { VscGithubInverted } from 'react-icons/vsc'
import { PiInstagramLogoFill } from 'react-icons/pi'

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

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer_logo'>FishingDeus</a>
      <ul className='permalinks'>
        <li><Link to='/fishingpedia'>FishingPedia</Link></li>
        <li><Link to='/map'>Map</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
      <div className="footer_socials">
        <a href="mailto:akushyk799@gmail.com"><TbMailForward/></a>
        <a href="https://github.com/git-user-cpp/fishingdeus"><VscGithubInverted/></a>
        <a href="https://instagram.com/"><PiInstagramLogoFill/></a>
      </div>
      <div className="footer_copyright">
        <small><AiOutlineCopyright className='copyright_label'/> FishingDeus. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
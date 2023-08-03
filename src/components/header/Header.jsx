import React from 'react'
import { header_image } from '../../assets'
import './Header.css'

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

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-poster">
          <img src={header_image} alt="poster" />
        </div>
        <div className="header-info">
          <p className='text-gradient'>
            This site was created as an open source project. <br /> We can only maintain it thanks to your donations.
          </p>
          <a href="https://opencollective.com/git-user-cpp" className='btn btn-primary'>Support The Project</a>
        </div>
      </div>
    </header>
  )
}

export default Header
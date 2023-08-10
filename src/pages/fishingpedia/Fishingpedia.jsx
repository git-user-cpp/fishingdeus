import React from 'react'
import './Fishingpedia.css'
import { fishingpedia_articles } from '../../data'
import FishingpediaSearch from './search/Search.jsx'

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

const Fishingpedia = () => {
  return (
    <div className="container fishingpedia_container">
      <section className='fishingpedia_search'>
        <FishingpediaSearch />
      </section>
      {/* <section className='fishingpedia_pages'>
        <article className='fishingpedia_page'>
          {
            fishingpedia_articles.map(({photo, header, text}, index) => {
              return (
                <section className='article_section' key={index}>
                  <h1>{header}</h1>
                  <article className='article'>
                    <div className="photo">
                      <img src={photo} alt="" />
                    </div>
                    <div className="article_text">
                      <p>
                        {text}
                      </p>
                    </div>
                  </article>
                </section>
              )
            })
          }
        </article>
      </section> */}
    </div>
  )
}

export default Fishingpedia
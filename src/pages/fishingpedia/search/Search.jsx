import React, { useState } from 'react';
import { fishingpedia_articles } from '../../../data';
import './Search.css'

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

const FishingpediaSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredArticles = fishingpedia_articles.filter(article =>
    article.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container fishingpediaSearch_container'>
      <div className="search_input">
        <input
          type="text"
          placeholder="Search fish"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredArticles.map((article, index) => (
        <div key={index} className='search_object'>
          <h1>{article.header}</h1>
          <article className='article'>
            <div className="photo">
              <img src={article.photo} alt="" />
            </div>
            <div className="article_text">
              <p>
                {article.text}
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default FishingpediaSearch;
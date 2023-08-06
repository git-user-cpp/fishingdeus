import React from 'react'
import { Header } from '../../components/'
import './Home.css'

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'

/* Data */
import { swiper_photos, home_articles } from '../../data'

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

const Home = () => {
  return (
    <div className='container home_container'>
      <Header />
      <section className='swiper_section'>
        <Swiper modules={[EffectCube, Autoplay]} effect="cube" cubeEffect={{slideShadows: false,}} className="container swipe_container"
          spaceBetween={40}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          centeredSlides={true}
          loop={true}
        >
          {
            swiper_photos.map(({photo}, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="photo">
                    <img src={photo} alt="" />
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
      <section className='articles'>
        {
          home_articles.map(({photo, header, text}, index) => {
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
      </section>
    </div>
  )
}

export default Home
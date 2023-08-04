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
import { data } from '../../data'

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
    <div className='container home-container'>
      <Header />
      <Swiper modules={[EffectCube, Autoplay]} effect="cube" cubeEffect={{slideShadows: false,}} className="container swipe_container"
        spaceBetween={40}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        centeredSlides={true}
        loop={true}
      >
        {
          data.map(({photo}, index) => {
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
      <article>
        FishingPedia
      </article>
      <article>
        Map
      </article>
      <article>
        News
      </article>
      <article>
        Blog
      </article>
    </div>
  )
}

export default Home
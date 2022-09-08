import { Typography,Slider,Slide } from '@mui/material'
import React from 'react'
//import {Slide} from 'hero-slider';
import banner1 from '../../Image/banner1.jpg'

function Banner() {
  return (
    <Slider
     slidingAnimation=" left_to_right"
     orientation="horizontal"
     initialSlide={1}
     onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange, previousSlider")}
     onChange={nextSlide => console.log("onChangee", nextSlide)}
     onAfterChange={nextSlide => console.log("inAfterChange", nextSlide)}
     style={{
      backgroundColor: "rgba(0,0,0,0.33)"
     }}
     settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldDisplayButtons: true,
      shouldAutoPlay: true,
      autoplayDuration: 5000,
      height: "100vh"


     }}
    >
      <Slide
        background={{
          backgroundImage: banner1,
          backgroundAttachment: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImage: banner1,
          backgroundAttachment: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImage: banner1,
          backgroundAttachment: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImage: banner1,
          backgroundAttachment: "fixed"
        }}
      />
    </Slider>
  )
}

export default Banner
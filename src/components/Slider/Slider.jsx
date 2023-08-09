import React, { useState } from 'react'
import SlideItems from './SlideItem';

const Slider = ({setIsAnime,isAnime}) => {

  const [type,setType] = useState('')

   
  return (
   <SlideItems isAnime={isAnime} setIsAnime={setIsAnime} type={type} setType={setType} />
  )
}

export default Slider

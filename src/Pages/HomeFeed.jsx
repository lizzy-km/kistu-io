import React from 'react'
import {  useAllMangaListQuery } from '../Redux/Api/MangaApi'
import Slider from '../components/Slider/Slider'
import { UNSAFE_RouteContext, useNavigate } from 'react-router-dom'
import { useTrendingMangaQuery } from '../Redux/Api/MangaPhotoApi'

const HomeFeed = ({setIsAnime,isAnime}) => {


  const navigate = useNavigate()

  const params =()=> {
    let {matches}= React.useContext(UNSAFE_RouteContext);
    let routeMatch = matches[matches.length-1];
    // console.log(routeMatch.pathname);
    if (routeMatch.pathname === '/') {
      navigate('/anime')
    }

    return routeMatch ? routeMatch.pathname : {};
  }
 
  
const navig = params()
const {isLoading}= useTrendingMangaQuery(navig.slice('1','999'))



  if (isLoading) {
    return (
      <section className=' flex justify-start items-start w-full h-screen ' >
        <div className=' bg-[#3f1717] w-[100%] h-[350px] flex justify-center items-center p-[1rem] ' >
          <div className=' bg-[#29171793] w-[100%] h-[100%] rounded-xl ' >
            
          </div>
        </div>
     </section>
    )
  }

  else{
    return (
      
     <section className=' flex justify-start items-start w-full h-screen ' >
      <Slider isAnime={isAnime} setIsAnime={setIsAnime}/>
     
       
     </section>
    )
  }

  
}

export default HomeFeed
import { Carousel } from '@mantine/carousel';
import { useTrendingMangaQuery } from '../../Redux/Api/MangaPhotoApi';
import SlideCard from './SlideCard';
import React, { useState } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';




const SlideItems =({type,setType,setIsAnime,isAnime})=> {

  const parms =()=> {
    let {matches}= React.useContext(UNSAFE_RouteContext);
    let routeMatch = matches[matches.length-1];
    console.log(routeMatch.pathname);
    setType(routeMatch.pathname)

    // return routeMatch ? routeMatch.params : {};
  }

  const params = parms()
 

  const { data , isLoading} = useTrendingMangaQuery(type)
  console.log(data?.data);
   

    const Trending = data?.data
  return (
    <div className=' rounded-b-[30px]   flex w-[100%]  mt-[0px] h-[350px] ' >
    <Carousel className='slide1 rounded-b-[30px]  w-[100%]'
  maw='100%'
  height={400}
  width='100%'
>
   {
    Trending?.map(data =>{
        return(
            <Carousel.Slide key={data?.id}  className='rounded-b-[30px]' >
                <div className='z-[-1] rounded-b-[30px]  flex items-center justify-center h-[400px] w-[100%] ' >
                    <img className=' trend_cv_filter blur-md absolute w-[100%] h-[100%] ' src={data?.attributes?.coverImage?.large} alt=""/>
                      <div className=' slideBlur flex justify-center items-center shadow-lg mt-[0px] w-[100%] h-[100%] ' >
                          <SlideCard isAnime={isAnime} setIsAnime={setIsAnime} data={data} />
                      </div>
                  </div>
          
                </Carousel.Slide>
        )
    })
   }
                
     
 
  
  {/* ...other slides */}
</Carousel>
</div>
  );
}

export default SlideItems
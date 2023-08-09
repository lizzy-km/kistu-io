import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useAnimeAndMangaQuery, useReviewQuery } from '../Redux/Api/AnimeApi';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewData, Type } from '../Redux/Services/MangaSlice';
import Cookies from 'js-cookie';

const Review = ({isAnime}) => {
    const navigate = useNavigate()

   

    console.log(isAnime);

    const ReviewID =Cookies.get('ReviewId')

    
      const dispatch = useDispatch()
    
    if (isAnime === true) {
        const ReviewID =Cookies.get('ReviewId')
        if (ReviewID) {
           dispatch(Type({type:'anime'}))
        }
       
    }else{
        const ReviewID =Cookies.get('ReviewId')
        if (ReviewID) {
            dispatch(Type({type:'manga'}))
        }
    }

   

    //getType
    const type = useSelector(state => state.MangaSlice.type)
    const idForAandM = `/${type}/${ReviewID}`
    console.log(idForAandM);
    //Get Anime or Manga Review
    const Review = useReviewQuery(idForAandM)
    const ReviewPerson = Review?.data?.data
    console.log(ReviewPerson);

    //Get Anime or Manga DAta
    let {data,isLoading} = useAnimeAndMangaQuery(idForAandM)

    const ReviewD = data?.data
    console.log(ReviewD);
    console.log(isLoading);
    
  return (
    
     
    <section className=' flex w-[100%] h-screen justify-center items-start ' >
        <img className=' w-[100%] h-[350px] object-cover brightness-[50%] ' src={ReviewD?.attributes?.coverImage?.large} alt=""/>
    </section>
    
     
    
  
  )
}

export default Review
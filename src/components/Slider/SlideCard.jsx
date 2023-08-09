import React from 'react'
import { useAnimeGenresQuery } from '../../Redux/Api/AnimeApi'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { ReviewId } from '../../Redux/Services/MangaSlice'

const SlideCard = ({data,setIsAnime,isAnime}) => {
  const {currentData} = useAnimeGenresQuery(data?.id)
  const genres = currentData?.data
  if (data?.type === 'manga') {
    setIsAnime(false)
    Cookies.set('isAnime',JSON.stringify(isAnime))
  }
  if (data?.type === 'anime') {
    setIsAnime(true)
    Cookies.set('isAnime',JSON.stringify(isAnime))
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ReviewID = useSelector(state => state.MangaSlice.ReviewId)
  const toReview =()=>{
    dispatch(ReviewId({ReviewId:data?.id}))

    if (ReviewID) {
      Cookies.set('ReviewId',(ReviewID))

        navigate(`/review/${data?.attributes?.slug}`)
    }
    
  }
  return (
    <div  className=' cursor-pointer text-slate-300 relative rounded-xl flex w-[95%] h-[100%] mt-[40px] ' >
        <img className=' brightness-[50%]  z-[-1] absolute h-[350px] object-cover rounded-xl ' src={data?.attributes?.coverImage?.large} alt=""/>
      <div id='trend' className='  p-[1rem]    flex  w-[100%] h-[350px] justify-between rounded-xl items-start ' >
      <div className=' w-[20%] flex h-[100%]  rounded-l-lg  justify-start ' >
          <img className=' brightness-90   poster-img rounded-lg   ' src={data?.attributes?.posterImage?.large} alt=""/>
        </div>
        <div  className=' p-[1rem] detail-card backdrop-blur-[3px] gap-2   flex flex-col w-[80%] h-[100%] justify-start rounded-xl items-start '>
        <div className='  flex gap-2 items-center px-[1rem] ' >  
        <p className=' text-xl font-semibold ' > {data?.attributes?.canonicalTitle} </p>
        (<p className=' text-center ' > {data?.attributes?.abbreviatedTitles[0]} </p>)
        (<span> {data?.attributes?.startDate.slice('',4)} </span>)
        {
          data?.attributes?.showType &&  <Link to={`/${data?.attributes?.showType}`} className=' cursor-pointer flex px-[1rem] text-sm py-[.2rem] rounded-md mx-[1rem] bg-[#323232ac] ' >
          <p> {data?.attributes?.showType} </p>
        </Link>
        }
       
        </div>

        <div className='  flex gap-2 pt-[.4rem] px-[1rem] ' >
          {
            genres?.map(data =>{
              return(
                <Link to={`/${data?.attributes?.name}`} key={data?.id} className=' cursor-pointer flex px-[1rem] text-xs py-[.2rem] rounded-md  bg-[#323232ac] ' >
                <p> {data?.attributes?.name} </p>
              </Link>
              )
            })
          }
       
        </div>
       
           <div className=' w-[90%]   flex flex-col justify-start items-start gap-1 py-[.8rem]  px-[1rem] ' >
              <p className='max-h-[5.8rem] overflow-y-auto' > {data?.attributes?.description}  </p>
              <div onClick={toReview} className='  shadow-inner  px-[1rem] py-[.5rem] rounded-xl hover:border border-[#666666] cursor-pointer bg-[#7a292a9c] ' >
              <p>More Detail</p>
              </div>
              
           </div>
        </div>

       
      
      </div>
    </div>
  )
}

export default SlideCard
import React,{useEffect, useState} from 'react'
import {API_key,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    return () => {
      axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
        
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
      })
    };
  }, []);
  return (
    <div>
      <div className='banner ' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ''})`}}>
        <div className="content">
            <h1 className='title ps-5'>{movie ? movie.title : ''}</h1>
            <div className="banner_buttons">
                <button className='button ms-5'>play</button>
                <button className='button'>My list</button>

            </div>
  
           <h1 className='discription ps-5'>{movie ? movie.overview : ''}</h1>
          
            <div className="fade_bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner

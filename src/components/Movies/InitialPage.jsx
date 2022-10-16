import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import s from './InitialPage.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './InitialPage.style.css'
import { Pagination } from "swiper";

const apikey = process.env.REACT_APP_apikey;

export default function InitialPage (){
    console.log(apikey)
    const [initialMovies, setInitialMovies] = useState([])
    const idsArray = ['tt8041270','tt4123432', 'tt10298810','tt9419884','tt5108870','tt12412888', 'tt1745960' ,'tt11827628','tt1877830', 'tt1630029', 'tt9114286','tt6443346', 'tt10648342','tt12593682','tt5113044'];
    const idsPromises = idsArray.map(id => {
        return fetch (`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
            .then(res => res.json())
    })
    useEffect(() =>{
        Promise.all(idsPromises)            
        .then(movies => {
            setInitialMovies (movies)
        })
        .catch (error => console.log (error))
    }, [])

    const premiers = initialMovies.splice(0,9)
    
    return (
        <>
            <h3 className={s.h3}>Premiers</h3>
            <div className={s.container}>
                <Swiper
                    breakpoints={{
                        1:{
                            slidesPerView:1
                        },
                        570:{
                            slidesPerView:2
                        },
                        900:{
                            slidesPerView:3
                        },
                        1150:{
                            slidesPerView:4
                        }
                    }}
                    pagination={{dynamicBullets: true,}}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {premiers.map(movie =>{
                        return(
                            <SwiperSlide key={movie.imdbID} >
                                <MovieCard
                                id={movie.imdbID} 
                                img={movie.Poster} 
                                title={movie.Title}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <h3 className={s.h3}>Coming Soon</h3>
            <div className={s.container}>
                <Swiper
                    breakpoints={{
                        1:{
                            slidesPerView:1
                        },
                        570:{
                            slidesPerView:2
                        },
                        900:{
                            slidesPerView:3
                        },
                        1150:{
                            slidesPerView:4
                        }
                    }}
                    pagination={{dynamicBullets: true,}}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {initialMovies.map(movie =>{
                        return(
                            <SwiperSlide key={movie.imdbID} >
                                <MovieCard
                                id={movie.imdbID} 
                                img={movie.Poster} 
                                title={movie.Title}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}
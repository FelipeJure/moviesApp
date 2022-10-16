import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apikey from '../../apikey';
import s from './MovieDetail.module.css';
import Loading from './Loading';

function MovieDetail () {

    const [movie, setMovie] = useState(undefined)

    const {id} = useParams ()

    useEffect(() =>{
        fetch (`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
              setMovie (movie)
            })
            .catch (error => console.log (error));
    }, [id])
if (movie === undefined){
    return <Loading/>
} else if(movie) {
    return ( 
        <div className={s.container}>
            <img src={movie.Poster} alt='img' className={s.img} />
            <div className={s.text}>
                <p className={s.title}>{movie.Title}</p>
                <p>Year: <b>{movie.Year}</b></p>
                <p>Duration: <b>{movie.Runtime}</b></p>
                <p>Genre: <b>{movie.Genre}</b></p>
                <p>Director: <b>{movie.Director}</b></p>
                <p>Actors: <b>{movie.Actors}</b></p>
                <span className={s.resume}>{movie.Plot}</span>
            </div>
        </div>
    )
}}
export default MovieDetail;
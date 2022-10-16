import React from "react";
import s from '../Movies/Movies.module.css';
import { useSelector } from 'react-redux';
import MovieCard from "../Movies/MovieCard";


function Saw (){
  const sawMovies = useSelector(state => state.sawMovies)
    return (
        <div className={s.container}>
          {sawMovies.map (movie => {
          return (
            <MovieCard 
              id={movie.id} 
              key={movie.id} 
              img={movie.img} 
              title={movie.title}
            />
          )})
          }
        </div>
    );
}

export default Saw
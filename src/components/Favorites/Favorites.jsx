import React from "react";
import { connect } from "react-redux";
import s from '../Movies/Movies.module.css';
import MovieCard from '../Movies/MovieCard'

function Favorites (props){
    return (
        <div className={s.container}>
          {props.favoritesMovies.map (movie => {
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

function mapsStateToProps (state){
  return {
    favoritesMovies: state.favoritesMovies
  }
}

export default connect (mapsStateToProps, null) (Favorites);
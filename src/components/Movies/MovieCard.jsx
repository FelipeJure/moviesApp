import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MovieCard.module.css';
import { connect } from 'react-redux';
import { addFavoriteMovie, addSawMovie, removeFavoriteMovie, removeSawMovie } from "../../redux/actions";
import { IoInformationCircleOutline } from "react-icons/io5";

function MovieCard (props){
    const [favorite, setFavorite] = useState(props.favoritesMovies.findIndex(e => e.id === props.id) >= 0? true:false)
    const [saw, setSaw] = useState(props.sawMovies.findIndex(e => e.id === props.id) >= 0? true:false)

    const onFavoriteClick = () => {
        if (favorite){
            setFavorite (false)
        } else {setFavorite (true)}
    } 
    const onSawClick = () => {
        if (saw){
            setSaw (false)
        } else {setSaw (true)}
    } 
    
    return(
        <div className={s.peli} key={props.id}>
            <section className={s.section}>
                <Link to={`/movie/${props.id}`} className={s.title}>
                    <img src={props.img} alt='Not found' className={s.imagen} id='imagen'/>
                    <IoInformationCircleOutline className={s.playIcon}/>
                </Link>
            </section>
            <div className={s.info}>
                <Link to={`/movie/${props.id}`} className={s.title}>
                    <span className={s.name}>{props.title}</span>
                </Link>
                <div className={s.icons}>
                    {favorite? 
                        <svg onClick={() => {
                            props.removeFavoriteMovie({id:props.id});
                            onFavoriteClick()
                        }} 
                            className={s.heart} 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill='currentColor'
                            viewBox="0 0 512 512">
                            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                        </svg>
                    :
                    
                        <svg onClick={() => {props.addFavoriteMovie({
                            title: props.title, 
                            img: props.img,
                            id:props.id })
                            onFavoriteClick ()}} 
                        className={s.heart} 
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                            <path className={s.heart} d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/>
                        </svg>
                    } 
                    {saw?
                        <svg onClick={() => {
                            props.removeSawMovie({id:props.id});
                            onSawClick()
                            }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-check-circle-fill ${s.check}`} viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    :
                        <svg onClick={() => {props.addSawMovie({
                            title: props.title, 
                            img: props.img,
                            id:props.id })
                            onSawClick ()
                            }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-check-circle ${s.check}`} viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                        </svg>
                    }
                </div>
            </div>
                
            
        </div>
    )
}

function mapsStateToProps (state){
    return {
        favoritesMovies: state.favoritesMovies,
        movies: state.loadedMovies,
        sawMovies: state.sawMovies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavoriteMovie: movie => dispatch(addFavoriteMovie(movie)),
        removeFavoriteMovie: movie => dispatch(removeFavoriteMovie(movie)),
        addSawMovie: movie => dispatch(addSawMovie(movie)),
        removeSawMovie: movie => dispatch(removeSawMovie(movie))
    };
}

export default connect(mapsStateToProps, mapDispatchToProps)(MovieCard)
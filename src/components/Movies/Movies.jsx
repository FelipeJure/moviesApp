import React, {useState} from "react";
import { useSelector } from "react-redux";
import MovieCard from './MovieCard'
import s from './Movies.module.css'
import Error from './Error';
import InitialPage from './InitialPage';

function Movies (){
    const [active, setActive] = useState('1')
    let movies = useSelector(state => state.loadedMovies)
    const onChange = (e)=>{
        setActive(e.target.name);
        window.scrollTo(0, 0)
    }
    let btn =document.getElementsByClassName('btn-secondary')
    if (btn[0]) {
        for(let i=0; i< btn.length; i++){
            if (btn[i].name === active) btn[i].style.backgroundColor ='#136c74';
            else{btn[i].style.backgroundColor ='#327d84'}
        }
    }
    if(movies[0]) 
        if(movies[0].Title === 'Movie not found') return <Error/>
        if (movies[0]){
            movies.sort((a, b) =>{
                if (a.Year > b.Year) return 1;
                if (a.Year < b.Year) return -1;
                return 0;
            }).reverse()
            
            let moviesInScreen = []
            if(active === '1') moviesInScreen = movies.slice(0,12)
            if(active === '2') moviesInScreen = movies.slice(12,24)
            if(active === '3') moviesInScreen = movies.slice(24,36)
        return(
            <>
            <div className={s.container}>
                {moviesInScreen.map (movie => {
                    return (
                        <MovieCard 
                            id={movie.imdbID} 
                            key={movie.imdbID} 
                            img={movie.Poster} 
                            title={movie.Title}
                        />
                    )
                })}
            </div>
            {movies.length > 12 &&   
                <div className={`btn-group ${s.numbers}`} role="group" aria-label="Basic example">
                <button onClick={onChange} type="button" name='1' className={`btn btn-secondary ${s.btn1}`}>1</button>
                <button onClick={onChange} type="button" name='2' className={`btn btn-secondary ${s.btn2}`}>2</button>
                {movies.length > 36 && <button onClick={onChange} type="button" name="3" className={`btn btn-secondary ${s.btn3}`}>3</button>}
                </div> 
                }
            </>
        )
    } else {
        return (
            <InitialPage/>
        )
    }
}
export default Movies
import React from "react";
import s from './Navbar.module.css';
import img from '../../FilmImagen.png';
import { NavLink } from "react-router-dom";
import { getMovies } from '../../redux/actions';
import { useDispatch } from "react-redux";


export default function Navbar (){
    const [input, setInput] = React.useState ('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies(input))
        setInput('')
    }
    return (
        <nav className='navbar navbar-dark bg-dark sticky-top navbar-expand-sm'>
            <div className="navbar-brand">
                <img src={img} alt='img' className={`d-inline-block align-text-top ${s.img}`}/>
                <span> MovieApp</span>
            </div>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${s.form}`} id="navbarToggleExternalContent">
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id={s.linkDiv}>
                        <li className="nav-item">
                            <NavLink exact to='/' className={s.links} activeClassName={s.active}>
                                <span >Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/favorites' className={s.links} activeClassName={s.active}>
                                <span >Favorites</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/saw' className={s.links} activeClassName={s.active}>
                                <span >Saw</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={s.form} role="search">
                        <div className={s.searchDiv}>
                            <div className={s.border}>
                                <input onChange={handleChange} value={input} className={`${s.input}`} type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn" type="submit" id={s.btn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

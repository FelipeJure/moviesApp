import React from 'react';
import s from './Error.module.css';

export default function Error(){
    return (
        <div className={s.container}>
            <img className={s.img} src='https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c=' alt='not found'/>
            <p className={s.text}>Movie not found</p>
        </div>
    )
}
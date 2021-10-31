import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function app(){

    

    return(
        <div className='nav-header'>
            <Link to='/HomePage/Home'>Home</Link>
            <Link to='/HomePage/Search'>Search</Link>
            <Link to='/HomePage/About'>About</Link>
        </div>
    )
}

export default app;
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import user from "../../images/user.png"
import "./header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const submitSearch = e => {
        e.preventDefault()
        if(search === "") return alert("Enter a movie or show name!")
        dispatch(fetchAsyncMovies(search))
        dispatch(fetchAsyncShows(search))
        setSearch("")
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/">Movie App</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitSearch}>
                    <input 
                        type="text" 
                        value={search} 
                        placeholder='Search Movies or Shows' 
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;
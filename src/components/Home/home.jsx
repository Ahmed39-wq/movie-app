import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch()
    const movieText = "Harry"
    const seriesText = "Friends"
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(seriesText))
    },[dispatch])

    return (
        <>
            <div className='banner-img'></div>
            <MovieListing />
        </>
    );
};

export default Home;
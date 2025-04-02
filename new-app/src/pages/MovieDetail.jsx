import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../index.css'; 

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`);

                if (response.data.Response === 'False') {
                    throw new Error(response.data.Error);
                }
                setMovie(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (isLoading) return <div className="loading">Загрузка...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!movie) return <div className="error">Данные не найдены</div>;

    return (
        <div className="movie-detail-container">
            <h1 className="movie-title">{movie.Title}</h1>
            <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                alt={`${movie.Title} poster`}
                className="movie-poster"
            />
            <div className="movie-info">
                <span>Жылы: {movie.Year}</span>
                <span>Жанры: {movie.Genre}</span>
                <span>Режиссер: {movie.Director}</span>
                <span>Актерлер: {movie.Actors}</span>
                <span>Сипаттама: {movie.Plot}</span>
            </div>
            <button className="movie-button" onClick={() => window.history.back()}>
                Артқа қайту
            </button>
        </div>
    );
}
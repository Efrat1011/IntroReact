import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

export default function MovieList({ movies }) {
    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Link
                        to={`/movie/${movie.imdbID}`}
                        key={movie.imdbID}
                        className="movie-card"
                        aria-label={`Подробнее о фильме ${movie.Title}`}
                    >
                        <div className="movie-poster">
                            <img
                                src={
                                    movie.Poster !== 'N/A'
                                        ? movie.Poster
                                        : 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                                }
                                alt={`Постер ${movie.Title}`}
                                loading="lazy"
                            />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.Title}</h3>
                            <p className="movie-meta">
                                <span>{movie.Year}</span>
                                <span>•</span>
                                <span>{movie.Type === 'movie' ? 'Фильм' : 'Сериал'}</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="no-result">Фильмы не найдены. Попробуйте другой запрос</p>
            )}
        </div>
    );
}
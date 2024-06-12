import React, { useState } from "react";
import "./MovieApp.css";
import { MovieList } from "./MovieList";
import { Notification } from "./Notification";

export const MovieApp = () => {

  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = '168f5d58159d6deb0977918006e85a37'

  const handleInputChange = ({ target }) => {
    setSearch(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchMovies()
  }

  const fetchMovies = async () => {
    setLoading(true)
    setMovieList([])
    setError(null)
    try {
      const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}&language=es-ES`)
      const data = await response.json()
      if (response.ok) {
        setMovieList(data.results)
      } else {
        setMovieList([])
        setError(data.status_message)
      }
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-body ">
          <p className="title has-text-centered">Buscador de Películas</p>
        </div>
      </section>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <p className={`control is-expanded ${loading && 'is-loading'}`}>
              <input className="input" type="text" placeholder="Escribe una película" onChange={handleInputChange} />
            </p>
            <p className="control">
              <button className="button is-success">
                Buscar
              </button>
            </p>
          </div>
        </form>
        {loading && <Notification message={'Buscando peliculas...'} />}
        {movieList ? <MovieList movies={movieList} /> : <Notification message={'No se encontraron peliculas'} />}
        {error && <Notification message={error} type={'is-danger'} />}
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import Slider from '../../components/Slider'
import { MoviesContainer, MovieCard } from './styles'

function Movies() {
  const [allMovies, setAllMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getAllMovies()
        setAllMovies(movies)
      } catch (error) {
        console.error(error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <>
      {/* Slider mostrando todos os filmes */}
      {allMovies.length > 0 && (
        <Slider info={allMovies} title="Todos os Filmes" />
      )}

      {/* Cards de todos os filmes */}
      <MoviesContainer>
        {allMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            onClick={() => navigate(`/filmes/${movie.id}`)}
          >
            <img src={getImages(movie.poster_path)} alt={movie.title} />
            <h3>{movie.title}</h3>
          </MovieCard>
        ))}
      </MoviesContainer>
    </>
  )
}

export default Movies

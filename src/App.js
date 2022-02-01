import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DirectorsPage from './pages/DirectorsPage';
import LoginPage from './pages/LoginPage';
import MoviesPage from './pages/MoviesPage';
axios.defaults.headers.Accept = 'application/json';

function App() {
  const [token, setToken] = useState(undefined);
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [genres, setGenres] = useState([]);

  const onLogin = async credentials => {
    try {
      const res = await axios.post('http://localhost:8000/api/login', credentials);
      setToken(res.data.token.split('|')[1]);
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  useEffect(() => {
    if (!token) {
      return;
    }
    axios.get('http://localhost:8000/api/movies', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setMovies(res.data);
    })

    axios.get('http://localhost:8000/api/genres', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setGenres(res.data);
    })
    axios.get('http://localhost:8000/api/directors', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setDirectors(res.data);
    })
  }, [token])
  const addMovie = async movie => {
    try {
      const res = await axios.post('http://localhost:8000/api/movies', movie, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMovies(prev => [...prev, {
        ...res.data,
        genre: genres.find(e => e.id == res.data.genre_id),
        director: directors.find(e => e.id == res.data.director_id)
      }]);
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  return (
    <BrowserRouter>
      <Navbar authenticated={token !== undefined} />
      <Routes>
        {
          token !== undefined ? (
            <>
              <Route path='/' element={<MoviesPage movies={movies} directors={directors} genres={genres} onAdd={addMovie} />} />
              <Route path='/directors' element={<DirectorsPage directors={directors} />} />
            </>
          ) : (

            <Route path='/' element={<LoginPage onSubmit={onLogin} />} />
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

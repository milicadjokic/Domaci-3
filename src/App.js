import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
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
  return (
    <BrowserRouter>
      <Navbar authenticated={token !== undefined} />
      <Routes>
        {
          token !== undefined ? (
            <>

              <Route path='/' element={<></>} />
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

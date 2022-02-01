import React, { useState } from 'react';
import Input from '../components/Input';
import Table from '../components/Table';

const columns = [
  {
    header: 'ID',
    render: e => e.id
  },
  {
    header: 'Name',
    render: e => e.name
  },
  {
    header: 'Rate',
    render: e => e.rate
  },
  {
    header: 'Rate',
    render: e => e.duration
  },
  {
    header: 'Director',
    render: e => e.director.first_name + ' ' + e.director.last_name
  },
  {
    header: 'Genre',
    render: e => e.genre.name
  }
]

export default function MoviesPage({ movies, onAdd, genres, directors }) {
  const [name, setName] = useState('');
  const [rate, setRate] = useState(1);
  const [directorId, setDirectorId] = useState(0);
  const [genreId, setGenreId] = useState(0);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  return <div className='container mt-3'>
    <h1>Movies</h1>
    <div className='row mt-3'>
      <div className='col-8'>
        <Table data={movies} columns={columns} />
      </div>
      <div className='col-4'>
        <h2 className='text-center'>Add movie</h2>
        <form onSubmit={e => {
          e.preventDefault();
          onAdd({
            name,
            rate,
            description,
            duration,
            director_id: directorId,
            genre_id: genreId
          })
        }}>
          <Input label='Name' value={name} setValue={setName} />
          <Input type='number' label='Rate' value={rate} setValue={setRate} />
          <Input type='number' label='Duration' value={duration} setValue={setDuration} />
          <label >Director</label>
          <select className='form-control' value={directorId} onChange={e => setDirectorId(e.target.value)}>
            {
              directors.map(e => {
                return (
                  <option value={e.id}>{e.first_name + ' ' + e.last_name}</option>
                )
              })
            }
          </select>
          <label >Genre</label>
          <select className='form-control' value={genreId} onChange={e => setGenreId(e.target.value)}>
            {
              genres.map(e => {
                return (
                  <option value={e.id}>{e.name}</option>
                )
              })
            }
          </select>
          <label >Description</label>
          <textarea className='form-control' value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10"></textarea>
          <button className='btn btn-primary form-control mt-2'>Create</button>
        </form>
      </div>
    </div>
  </div>;
}

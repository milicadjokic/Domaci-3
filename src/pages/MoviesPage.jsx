import React from 'react';
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
  return <div className='container mt-3'>
    <h1>Movies</h1>
    <div className='row mt-3'>
      <div className='col-8'>
        <Table data={movies} columns={columns} />
      </div>
      <div className='col-4'>
        <h2 className='text-center'>Add movie</h2>
      </div>
    </div>
  </div>;
}

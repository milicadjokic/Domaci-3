import React from 'react';
import Table from '../components/Table';

const columns = [{
  header: 'ID',
  render: e => e.id
}, {
  header: 'First name',
  render: e => e.first_name
}, {
  header: 'Last name',
  render: e => e.last_name
}]

export default function DirectorsPage({ directors }) {
  return <div className='container mt-2'>
    <h1 className='text-center'>Directors</h1>
    <Table data={directors} columns={columns} />
  </div>;
}

import React from 'react';

export default function Table({ columns, data }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          {
            columns.map(column => {
              return (
                <th>{column.header}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          (data || []).map(row => {
            return (
              <tr>
                {
                  columns.map(column => {
                    return <td>
                      {column.render(row)}
                    </td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

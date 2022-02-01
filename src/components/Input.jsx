import React from 'react';

export default function Input({ value, setValue, type, label, required }) {
  return (
    <div>
      {label && (
        <label>{label}</label>
      )}
      <input className='form-control' required={required} type={type} value={value} onChange={e => { setValue(e.target.value) }} />
    </div>
  );
}

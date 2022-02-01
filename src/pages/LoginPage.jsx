import React, { useState } from 'react';
import Input from '../components/Input';

export default function LoginPage({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='container mt-2'>
      <h1>Log in</h1>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit({ email, password });

      }} className='mt-4 '>
        <Input required label='Email' value={email} setValue={setEmail} type='email' />
        <Input required label='Password' value={password} setValue={setPassword} type='password' />
        <button className='btn btn-primary mt-3 form-control'>Login</button>
      </form>
    </div>
  );
}

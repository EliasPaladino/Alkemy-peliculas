import axios from 'axios';
import React from 'react';
import './login.css'

function Login() {

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( email=== '' || password === '' ) {
      console.log('Por favor, rellena todos los campos');
      return;
    }

    if( email !== '' && !regexEmail.test(email)) {
      console.log('Por favor, introduce un email válido');
      return;
    }

    if( email !== 'challenge@alkemy.org' && password !== 'elias') {
      console.log( 'Creedenciales inválidas');
      return;
    }

    console.log( 'OK, estamos listos para enviar la información');

    axios
      .post('http://challenge-react/alkemy.org', {email, password})
      .then( res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
      })
  }

  return (
    <>
      <h1>Formulario de login</h1>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electrónico:</span> <br/>
                <input type='text' name='email' /><br/>
            </label>
            <label>
                <span>Contraseña:</span> <br/>
                <input type='password' name='password' />
            </label>
            <br />
            <button type='submit'>Ingresar</button>
        </form>
    </>
  )
}

export default Login;
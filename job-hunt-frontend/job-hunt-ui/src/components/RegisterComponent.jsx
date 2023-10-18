import React, { useState } from 'react'
import { registerAPICall } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {

   const [name, setName] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigator = useNavigate();

   function handleRegistrationForm(e){
    e.preventDefault()

    const register = {name, username, email, password}

    registerAPICall(register).then((result) => {
        console.log(result.data);
        navigator('/jobs')
    }).catch((err) => {
        console.error(err);
    });

   }

  return (
    <div className="container">
        <br /> <br />
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card shadowt">
                    <div className="card-header">
                        <h2 className="text-center" style={{"color":"white"}}>User Registration Form</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control'
                                        placeholder='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        placeholder='username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <button className='btn' onClick={(e) => handleRegistrationForm(e)} style={{background:'#2AB855', color:"white"}}>register</button>
                                <a href="/login" id='formsubmit'>login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterComponent
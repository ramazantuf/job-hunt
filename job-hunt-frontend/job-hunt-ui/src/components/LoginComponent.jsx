import React, { useState } from 'react'
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate()
    

    async function handleLoginForm(e){
        e.preventDefault()

        const obj = {username, password}
        console.log(obj);

        await loginAPICall(username, password).then((response) => {
            console.log(response)

            const token = 'Basic '+window.btoa(username + ":" +password);
            storeToken(token);
            saveLoggedInUser(username)

            navigator('/jobs')
            window.location.reload(false);
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
                        <h2 className="text-center" style={{"color":"white"}} >User Login Form</h2>
                    </div>
                    <div className="card-body">
                        <form>
                        <div className="row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type='username'
                                        name='username'
                                        className='form-control'
                                        placeholder='username or email'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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
                                <button className='btn' onClick={(e) => handleLoginForm(e)} style={{background:'#2AB855', color:"white"}}>login</button>
                                <a href="/register" id='formsubmit'>register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent
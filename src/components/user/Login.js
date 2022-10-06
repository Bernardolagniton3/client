import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
      
    const submitHandler = async e => {
        e.preventDefault();

        loginUser({
            username,
            password
        }).then(response => {
            if ('accessToken' in response) {
                localStorage.setItem('accessToken', response['accessToken']);
                window.location.href = "/Home";
            } else {
                console.log(response['message'])
            }
        }).catch(error => {
            console.log("some error occurred", error);
        });


    }


    async function loginUser(credentials) {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }
    return (
        <Fragment>
            <Fragment>
                <MetaData title={'Login'} />
                <div className="row wrapper">
                    <div className="col-10 col-lg-5">
                        <form className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={submitHandler}>
                            <h1 className="mb-3">Login</h1>
                            <div className="form-group">
                                <label className="labelspan" htmlFor="email_field">Cell Number or email/username</label>
                                <input
                                    type="email"
                                    id="email_field"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="labelspan" htmlFor="password_field">Password</label>
                                <input
                                    type="password"
                                    id="password_field"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='row'>
                                <div className="col-6">
                                    <button
                                        id="login_button"
                                        type="submit"
                                        className="btn btn-block py-3"
                                    >
                                        OK
                                    </button>
                                </div>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Login

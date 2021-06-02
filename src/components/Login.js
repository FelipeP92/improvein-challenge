import React, { useState } from 'react';
import { Redirect } from 'react-router';




const Login = () => {


    const [state, setState] = useState({
        email: '',
        password: ''
    });


    
    const handleChange = async e => {
        await setState({
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: state.user.email,
            password: state.user.password
        };
        
        if(data) {
            <Redirect to = {'/bands'}/>
        }
    };




    return (
        <div>
            <div className="container col-md-4 mt-5 d-flex justify-content-center">
                <form className="row g-4 card card-body" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center" style={{ fontSize: '1.5cm' }}>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="email@example.com"
                            name="email"
                            onChange = {handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange = {handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-block btn-danger mb-3"
                     
                    >Iniciar Sesion
                    </button>
                </form>
            </div>
        </div>
    )
};


export default Login;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true
            await axios.get("sanctum/csrf-cookie").then(() => {
                axios.post("api/login", {
                    email,
                    password,
                }).then((res) => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.token;
                    navigate("/");
                }).catch(err => {
                    console.log(err);
                    console.log(err.response);
                });
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={login}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="email"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email terdaftar"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Kata sandi</label>
                        <div className="control">
                            <input
                                type="password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan kata sandi"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
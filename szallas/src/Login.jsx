import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Link, Routes, Route} from 'react-router-dom';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const LoginKezeles = async () => {
    try {
        const response = await axios.post('https://szallasjwt.sulla.hu/login', {
        username,
        password
    });
    setToken(response.data.token);
    } catch (error) {
        console.log("Nem sikerült az autentikáció ", error);
    }
    };

return (
    <div className='justify-content-center d-grid'>
        <h2>Bejelentkezés</h2>
        Felhasználónév:
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        Jelszó:
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button onClick={LoginKezeles} className='btn btn-primary'>Bejelentkezés</button><br /><br />

        {token &&
            <div className='justify-content-center d-grid'>
            <button className='btn btn-secondary '><Link to={"/list-hotel"} className='w-100 text-dark text-decoration-none'>Hotelek listázása</Link></button><br />
            <button className='btn btn-secondary mt-2'><Link to={"/create-hotel"} className='text-dark text-decoration-none'>Hotel felvétele</Link></button>
            </div>
        }
    </div>

);
}

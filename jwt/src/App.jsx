import './App.css';
import React, { useState } from 'react';
import axios from 'axios';



export const App=() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);

  const LoginKezelo = async()=>{
    try{
      const response = await axios.post('https://jwt.sulla.hu/login',{
        username,
        password
      });
      setToken(response.data.token);
    }
    catch(error){console.log("Nem sikerült az autentikáció ",error);}
  };
  
  const adatLekeres = async() => {
    try{
      const response = await axios.get('https://jwt.sulla.hu/termekek',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setData(response.data)
    }
    catch(error){console.log("Nem sikerült az adat lekérés ",error);}
  }

  return(
    <div>
      <h2>Bejelentkezés</h2>
      Felhasználónév:
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/> <br /><br />
      Jelszó:
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br /><br />
      <button onClick={LoginKezelo}>Bejelentkezés</button>
      { token &&
          <div>
            <h2>Védett végpont</h2>
            <button onClick={adatLekeres}>Adat lekérés</button><br />
            {data && (
              <ul>
                {data.map((item) => (
                  <li key={item.id}>{item.name} - {item.price}</li>
                ))}
              </ul>
            )}
          </div>
      }
    </div>
  )
}



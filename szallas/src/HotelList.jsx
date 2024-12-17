import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const HotelList = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState([]);

    const adatLekeres = async() => {
        try{
            const response = await axios.get('https://szallasjwt.sulla.hu/data',{
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
            {data.map((hotel,index) => (
                <div key={index} className="card">
                    <h2 className="text-center">{hotel.name}</h2>
                    <p className="text-center">{hotel.hostname}</p>
                    <p className="text-center">{hotel.location}</p>
                    <p className="text-center">{hotel.price}Ft/éjszaka</p>
                    <p className="text-center">Minimum {hotel.min_nights} éjszaka</p>
                    <div>
                        <br />
                        <Link to={"/hotels/" + hotel.id} className='btn btn-primary'><i className="bi bi-text-paragraph fs-3"></i></Link>&nbsp;&nbsp;
                        <Link to={"/mod-hotel/" + hotel.id} className='btn btn-warning'><i className="bi bi-pencil-square fs-3"></i></Link>&nbsp;&nbsp;
                        <Link to={"/del-hotel/" + hotel.id} className='btn btn-danger'><i className="bi bi-trash2 fs-3"></i></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

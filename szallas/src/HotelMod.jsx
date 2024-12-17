import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const HotelMod =()=> {
    const [token, setToken] = useState('');
    const [data, setData] = useState([]);
    
    const params = useParams();
    const id = params.hotelId;
    const navigate = useNavigate();
    const [hotel, setHotel] = useState({
        name: '',
        hostname: '',
        location: '',
        price: 0,
        minimum_nights: 0
    });
    useEffect(() => {
        const adatLekeres = async() => {
            try{
                const response = await axios.get(`https://szallasjwt.sulla.hu/data/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                })
                setHotel(response.data)
            }
            catch(error){console.log("Nem sikerült az adat lekérés ",error);}
            }
        })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setHotel(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`https://szallasjwt.sulla.hu/data/${id}`, hotel)
        .then(() => {
            navigate("/");
        })
        .catch(error => {
            console.log('Error updating hotel data:', error);
        });
};

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>SZállás módosítása</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Szállás neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" defaultValue={hotel.name} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Tulaj neve:</label>
                    <div className="col-sm-9">
                        <input type="date" name="hostname" className="form-control" defaultValue={hotel.hostname} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Helyszín:</label>
                    <div className="col-sm-9">
                        <input type="number" name="location" className="form-control" value={hotel.location} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Ár:</label>
                    <div className="col-sm-9">
                        <input type="number" name="price" className="form-control" defaultValue={hotel.price} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Minimum éjszakák:</label>
                    <div className="col-sm-9">
                        <input type="text" name="minimum_nights" className="form-control" defaultValue={hotel.minimum_nights} onChange={handleInputChange}/><br />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
};
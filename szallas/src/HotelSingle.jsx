import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export const HotelSingle = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const valasz = await axios.get(`https://szallasjwt.sulla.hu/data/${hotelId}`)
                setHotel(valasz.data);
            }
            catch (hiba) {
                console.log(hiba);
            } 
    };
    fetchData();
    }, [hotelId]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Hotel neve: {hotel.name}</h2>
            <div className="row row-cols-2 justify-content-center align-items-center">
                    <div className="col">
                        <div className="card h-250 p-4">
                            <p className="text-center">Tulaj neve: {hotel.hostname}</p>
                            <p className="text-center">Helyszíne: {hotel.location}</p>
                            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                                <Link to="/" className='btn btn-primary'><i className="bi bi-backspace-fill fs-3"></i></Link>&nbsp;&nbsp;
                                <Link to={"/mod-hotel/" + hotel.id} className='btn btn-warning'><i className="bi bi-pencil-square fs-3"></i></Link>&nbsp;&nbsp;
                                <Link to={"/del-hotel/" + hotel.id} className='btn btn-danger'><i className="bi bi-trash2 fs-3"></i></Link>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    );
}
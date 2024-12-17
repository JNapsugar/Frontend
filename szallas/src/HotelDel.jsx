import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink, Link } from 'react-router-dom';
import axios from 'axios';

export const HotelDel=()=> {
    const { hotelId } = useParams();
    const [token, setToken] = useState('');
    const [data, setData] = useState([]);

    const params = useParams();
    const id = params.hotelId;
    const navigate = useNavigate();
    const[hotel,setHotel] = useState([]);
    const[isPending, setPending] = useState(false);

    useEffect(() => {
        const adatLekeres = async() => {
            try{
                const response = await axios.get(`https://szallasjwt.sulla.hu/data/${hotelId}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                })
                setHotel(response.data)
            }
            catch(error){console.log("Nem sikerült az adat lekérés ",error);}
            }
        })



return (
    <div className="p-5 m-auto text-center content bg-lavender">
        <h3 className="text-dark text-center">Törlendő szállás neve: {hotel.name}</h3>
        {isPending || !hotel.id ? (
            <div className="spinner-border"></div>
        ) : (
                        <div className="card p-4">
                            <p className="text-center">Tulaj neve: {hotel.hostname}</p>
                            <p className="text-center">Helyszíne: {hotel.location}</p>
                            <div className="card-body d-flex flex-column align-items-center">
                                    <NavLink to={"/"}><button className="bi bi-backspace btn btn-warning">&nbsp;Mégsem</button></NavLink>&nbsp;&nbsp;
                                    <button className="bi bi-trash3 btn btn-danger">&nbsp;Törlés</button>
                            </div>
            <form onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                axios.delete(`https://szallasjwt.sulla.hu/data/${hotelId}`)
                .then(() =>
                {
                    navigate("/");
                })
                    .catch(console.log);
                }}>
                
            </form>   
        </div>
                    
        )}
        </div>
        );
};
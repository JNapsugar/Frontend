import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const ChessList = () => {
    const [chesses, setChesses] = useState([])
    const [isPending, setPending] = useState(false)

    useEffect(()=> {
        setPending(true)
        fetch('https://chess.sulla.hu/chess')
        .then((valasz) => valasz.json())
        .then((sakkosok) => setChesses(sakkosok))
        .catch((hiba) => console.log(hiba))
        .finally(()=> setPending(false))
    }, [])

    return (
        
        <div className="container mt-5">
            <h2 className="text-center">Sakkozók</h2>
            {isPending? ( <div className="spinner-border"></div>) : 
            (
                <div className="row row-cols-1 row-cols-md-3 g-4">       
                    {chesses.map((chess, index)=>(
                        <div className="col" key={index}>
                        <div className="card h-100" key={index}>
                            <p className="text-dark text-center">Sakkozó neve: {chess.name}</p>
                            <p className="text-dark text-center">Születési éve: {chess.birth_date}</p>
                            <p className="text-dark text-center">Nyert világbajnokságai: {chess.world_ch_won}</p>
                            <div className="card-body d-flex flex-column align-items-center">
                            <Link to={chess.profile_url}>Profil link</Link> <br/>
                                <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"}
                                    alt={chess.name}
                                    className="img-fluid" style={{width:"200px"}}
                                />
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            ) }
        </div>
    )
}


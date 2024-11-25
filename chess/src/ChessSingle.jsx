
import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export const ChessSingle = () => {
    const {chessId} = useParams();
    const [chess, setChess] = useParams([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true)
        const fetchData = (async () => {
            try{
                const valasz = await axios.get(`https://chess.sulla.hu/chess/${chessId}`)
                const sakkos = await valasz.json()
                setChess(sakkos)
            }
            catch(hiba){
                console.log(hiba)
            }
            finally{
                setPending(false)
            }
        })
        fetchData()
        
    }, [chessId])

    return(
        <div className="container mt-5">
            <h2 className="text-center">Sakkozó {chess.name}</h2>
            {isPending || !chessId ? (<div className="spinner-border"></div>) : 
            (
                <div className="row row-cols-1 row-cols-md-3 g-4">       
                        <div className="col">
                            <div className="card h-100">
                                <h3 className="text-dark text-center">Sakkozó neve: {chess.name}</h3>
                                <h4 className="text-dark text-center">Születési éve: {chess.birth_date}</h4>
                                <h4 className="text-dark text-center">Nyert világbajnokságai: {chess.world_ch_won}</h4>
                                <div className="card-body d-flex flex-column align-items-center">
                                <Link to={chess.profile_url} className="fs-5" target="_blank">Profil link</Link> <br/>
                                    <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"}
                                        alt={chess.name}
                                        className="img-fluid" style={{width:"200px"}}
                                    />
                                </div>
                            </div>
                            <div className=" d-flex flex-row justify-content-center align-items-center">
                                    <Link to="/"><i className="bi bi-backspace-fill fs-3"></i></Link>&nbsp;&nbsp;&nbsp;
                                    <Link to="/"><i className="bi bi-pencil-square fs-3"></i></Link>
                            </div>
                        </div>
                </div>
            )}
        </div>
    )
}
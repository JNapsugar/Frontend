import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ChessCreate = () => {
    const navigate = useNavigate();
    return(
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új sakkozó</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = {
                        name: event.target.name.value,
                        birth_date: event.target.birth_date.value,
                        world_ch_won: event.target.world_ch_won.value,
                        profile_url: event.target.profile_url.value,
                        image_url: event.target.image_url.value
                    }
                    axios.post("https://chess.sulla.hu/chess", formData, {
                        headers: {'Content-type' : 'application/json',},
                    })
                    .then(()=> navigate("/"))
                    .catch((error) => console.error("Hiba történt",error))
                }}    
            >
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Sakkozó neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Születési éve:</label>
                    <div className="col-sm-9">
                        <input type="date" name="birthdate" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Nyert világbajnokságai</label>
                    <div className="col-sm-9">
                        <input type="number" name="world_ch_won" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Profil url-je</label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Kép url-je</label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    )
}
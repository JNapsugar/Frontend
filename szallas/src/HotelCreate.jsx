import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const HotelCreate = () => {
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új szállás</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = {
                        name: event.target.name.value,
                        hostname: event.target.hostname.value,
                        location: event.target.location.value,
                        price: event.target.price.value,
                        minimum_nights: event.target.minimum_nights.value,
                    };
                    axios.post("https://szallasjwt.sulla.hu/data", formData, {
                        headers: { 'Content-Type' : 'application/json',},
                    })
                    .then(() => navigate("/"))
                    .catch((error) => console.error("Hiba történt:", error))
                }}
            >
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Szállás neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Tulaj neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="hostname" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Helyszín:</label>
                    <div className="col-sm-9">
                        <input type="text" name="location" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Ár:</label>
                    <div className="col-sm-9">
                        <input type="number" name="price" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Minimum éjszaka:</label>
                    <div className="col-sm-9">
                        <input type="number" name="minimum_nights" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
}
import { useState } from "react";
import { server } from "../../tool";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../style/admin.modules.css";

const collections = ["Restaurant", "Bar", "Hotel", "Museum"];
const restaurantType = ["Americain", "Asiatique", "Europeen", "Latino"];
const museumType = ["Morderne", "Classique", "Atypique"];
const barType = ["Bar à cocktail", "Bar à bière", "Soft"];
const hotelType = ["1 étoile", "2 étoiles", "3 étoiles et plus"];

const Admin = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [col, setCol] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [price, setPrice] = useState(0);
    const [type, setType] = useState(null);
    const [file, setFile] = useState(null);
    const navigation = useNavigate();

    const switchType = () => {
        switch (col) {
            case "Restaurant": {
                return (
                    <div>
                        <select className="selectAdmin" onChange={e => setType(e.target.value)}>
                            {restaurantType.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                );
            }
            case "Museum": {
                return (
                    <div>
                        <select className="selectAdmin" onChange={e => setType(e.target.value)}>
                            {museumType.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                );
            }
            case "Bar": {
                return (
                    <div>
                        <select className="selectAdmin" onChange={e => setType(e.target.value)}>
                            {barType.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                );
            }
            case "Hotel": {
                return (
                    <div>
                        <select className="selectAdmin" onChange={e => setType(e.target.value)}>
                            {hotelType.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                );
            }
            default: console.log("error");
        };
    };

    const handlePost = async () => {
        await axios.post(`${server}/${col.toLowerCase()}`, { name, address, price, type, col }, { withCredentials: true })
            .then(res => {
                if (res.data.status === "success") {
                    setTimeout(() => {
                        handleImage(res.data.data._id);
                    });
                };
            });
    };

    const handleImage = async id => {
        let formData = new FormData();
        formData.append("file", file);

        const config = {
            headers: { 'content-type': 'multipart/form-data', "id": id, "collection": col },
            onUploadProgress: (event) => {
                console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
        };

        const res = await axios.patch(`${server}/uploads`, formData, config);
        if (res.data.status === "success") return window.reload();
    };

    return (

        <div div className="admin-container" >
            <div className="form-container">
                {
                    activeTab === "1" ?
                        <div>
                            <select className="selectAdmin" onChange={e => setCol(e.target.value)}>
                                {
                                    collections.map(col => (
                                        <option key={col}>{col}</option>
                                    ))
                                }
                            </select>
                            <button className="adminButton" onClick={() => setActiveTab("2")}>Suivant</button>
                        </div>
                        : <div>
                            <input type="text" placeholder="Nom du lieu" onChange={e => setName(e.target.value)} />
                            <input type="text" placeholder="Addresse" onChange={e => setAddress(e.target.value)} />
                            <input type="number" placeholder="Prix moyen" onChange={e => setPrice(e.target.value)} />
                            {switchType()}
                            <input type="file" name="file" placeholder="Photo du lieu" onChange={e => setFile(e.target.files[0])} />
                            <button className="adminButton" onClick={handlePost}>Poster</button>
                        </div>
                }
            </div>
        </div>

    );
};

export default Admin;
import { useState } from "react";
import { server } from "../../tool";
import axios from "axios";
import "../../style/admin.modules.css";

const collections = ["Restaurant", "Bar", "Hotel", "Museum"];
const restaurantType = ["Americain", "Asiatique", "Europeen", "Latino"];
const museumType = ["Moderne", "Classique", "Atypique"];
const barType = ["Cocktails", "Biere", "Soft"];
const hotelType = ["Appartement", "Hotel", "Chambre"];

const Admin = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [col, setCol] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [price, setPrice] = useState(0);
    const [type, setType] = useState(null);
    const [link, setLink] = useState(null)
    const [file, setFile] = useState(null);

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
        await axios.post(`${server}/${col.toLowerCase()}`, { name, address, price, type, col, link }, { withCredentials: true })
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
        if (res.data.status === "success") return window.location.reload();
    };

    return (

        <div div className="admin-container" >
            <div className="form-container">
                {
                    activeTab === "1" ?
                        <div className="adminFlex">
                            <img src="/logo.png" alt="logo" width={200} height={200} />
                            <select className="selectAdmin" onChange={e => setCol(e.target.value)}>
                                {
                                    collections.map(col => (
                                        <option key={col}>{col}</option>
                                    ))
                                }
                            </select>
                            <button className="adminButton" onClick={() => setActiveTab("2")}>Next</button>
                            <a href="/" className="styled-a">Access to the website</a>
                        </div>
                        : <div>
                            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                            <input type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} />
                            <input type="number" placeholder="price" onChange={e => setPrice(e.target.value)} />
                            <input type="text" placeholder="Link" onChange={e => setLink(e.target.value)} />
                            {switchType()}
                            <input type="file" name="file" placeholder="image" onChange={e => setFile(e.target.files[0])} />
                            <button className="adminButton" onClick={handlePost}>Poster</button>
                        </div>
                }
            </div>
        </div>

    );
};

export default Admin;
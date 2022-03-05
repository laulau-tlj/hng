import { useContext, useState, useEffect } from "react";
import { ResponseContext } from "../../context/ResponseContext";
import Card from "../../component/card/card";
import "../../style/home.modules.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../component/navbar";
import axios from "axios";
import { server } from "../../tool";

const Home = () => {
    const [col, setCol] = useState("");
    const [data, setData] = useState([]);
    const { response } = useContext(ResponseContext);

    useEffect(() => {
        switch (response[0]) {
            case "J'ai faim": {
                return setCol("restaurant");
            }
            case "J'ai envie de visiter": {
                return setCol("museum")
            }
            case "Allons boire un verre...": {
                return setCol("bar")
            }
            case "J'ai besoin d'un logement": {
                return setCol("hotel");
            }
            default: console.log("Error");
        };
    }, []);

    useEffect(() => {
        axios.get(`${server}/${col}`, { withCredentials: true })
            .then(res => {
                console.log("result axios", res);
                setData(res.data.data)
            });
    }, [col]);

    if (!col) { return (<div>Loading...</div>) };

    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="flexCard">
                    {data.map(item => (
                        <Card key={uuidv4()} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
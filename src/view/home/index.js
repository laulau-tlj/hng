import { useContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import db from "../../firebase-config";
import { ResponseContext } from "../../context/ResponseContext";
import Card from "../../component/card/card";
import "../../style/home.modules.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../component/navbar";

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
                return setCol("Musée")
            }
            case "Allons boire un verre...": {
                return setCol("Bar")
            }
            case "J'ai besoin d'un logement": {
                return setCol("hotel");
            }
            default: console.log("Error");
        };
    }, []);


    const getData = () => {
        if (col) {
            onSnapshot(collection(db, col), (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), type: response[1] })));
            });
        };

    };

    if (!col) { return (<div>Loading...</div>) };

    if (col) { getData() };

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
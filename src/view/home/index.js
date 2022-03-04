import { useContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
import { ResponseContext } from "../../context/ResponseContext";
import Card from "../../component/card/card";
import "../../style/home.modules.css";

const Home = () => {
    const [col, setCol] = useState("");
    const [data, setData] = useState(null);
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
        <div className="homeContainer">
            <div className="flexCard">
                {data && data.map(item => (
                    <Card key={item} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
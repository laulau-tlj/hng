import { useContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
import { ResponseContext } from "../../context/ResponseContext";

const Home = () => {
    const [col, setCol] = useState(null);
    const [value, setValue] = useState(null);
    const [data, setData] = useState(null);
    const { response } = useContext(ResponseContext)

    useEffect(() => {
        switch (response[0]) {
            case "J'ai faim": {
                return getRestaurants();
            }
            case "J'ai envie de visiter": {
                return getMuseum();
            }
            case "Allons boire un verre...": {
                return getBar();
            }
            case "J'ai besoin d'un logement": {
                return getHotel();
            }
            default: console.log("error");
        };
    }, []);

    const getRestaurants = () => {
        setCol("restaurant");
        if (col) {
            onSnapshot(collection(db, "restaurant"), (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            });
        };
    };

    const getMuseum = () => {
        setCol("museum");
        if (col) {
            onSnapshot(collection(db, "museum"), (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            });
        };
    };

    const getBar = () => {
        setCol("bar");
        if (col) {
            onSnapshot(collection(db, "bar"), (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            });
        };
    };

    const getHotel = () => {
        setCol("hotel");
        if (col) {
            onSnapshot(collection(db, "hotel"), (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            });
        };
    };

    if (!col || !data) { return (<div>Loading...</div>) }

    return (
        <div>
            {
                data.map(item => (
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </div>
    );
};

export default Home;
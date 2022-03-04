import { useContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
import { ResponseContext } from "../../context/ResponseContext";
import Card from "../../component/card/card";
import styled from "styled-components";


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
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            });
        };
    };


    if (!col) { return (<div>Loading...</div>) };

    if (col) { getData() };

    const FlexContainer = styled.div`
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 50% 50%;
            flex-direction: unset;
        }
    
        @media (min-width: 1024px) {
            grid-template-columns: 33.33% 33.33% 33.33%;
        }
    `;

    return (
        <div>
            <FlexContainer>
                {
                    data &&
                    data.map(item => (
                        <Card item={item} />
                    ))
                }
            </FlexContainer>
        </div>
    );
};

export default Home;
import Navbar from "../../component/navbar";
import { useState } from "react";
import Card from "../../component/card/card";

const Favorite = () => {
    const [favorites, setFavorites] = useState([JSON.parse(localStorage.getItem("favorite"))] || []);

    if (!favorites) return (<div>Loading...</div>);

    return (
        <div>
            <Navbar />
            <div>
                {
                    favorites.map(item => (
                        <Card item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Favorite;
import { useContext, useState, useEffect } from "react";
import { ResponseContext } from "../../context/ResponseContext";
import Card from "../../component/card/card";
import "../../style/home.modules.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../component/navbar";
import axios from "axios";
import { server } from "../../tool";
import SearchBar from "../../component/searchBar";

const Home = () => {
    const [col, setCol] = useState("");
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState(null);
    const [filter, setFilter] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const { response } = useContext(ResponseContext);

    useEffect(() => {
        switch (response[0]) {
            case "J'ai faim": {
                return setCol("restaurant");
            }
            case "J'ai envie de visiter": {
                return setCol("museum");
            }
            case "Allons boire un verre...": {
                return setCol("bar");
            }
            case "J'ai besoin d'un logement": {
                return setCol("hotel");
            }
            default: console.log("Error");
        };
    }, []);

    useEffect(() => {
        axios.get(`${server}/${col}/${response[1]}`, { withCredentials: true })
            .then(res => {
                setData(res.data.data);
            });
    }, [col]);

/*     const handleSetData = async () => {
        await axios.get(`${server}/${col}`, { withCredentials: true })
            .then(res => {
                setData(res.data.data);
            });
    }; */

    const searchText = (e) => {
        setFilter(e.target.value);
        setIsFilter(true);

        let dataSearch = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        });
        setSearchData(dataSearch);
    };

    if (!col) { return (<div>Loading...</div>) };

    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <div className="firstFlex">
                    <SearchBar
                        placeholder="What are you looking for ?"
                        value={filter}
                        onChange={searchText.bind(this)} />
                    {/* <button className="homeButton" onClick={handleSetData}>See all {col.charAt(0).toUpperCase() + col.slice(1)}</button> */}
                </div>
                <div className="flexCard">
                    {isFilter ?
                        searchData.map(item => (
                            <Card key={uuidv4()} item={item} col={col} />
                        )) :
                        data.map(item => (
                            <Card key={uuidv4()} item={item} col={col} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
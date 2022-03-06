import "../../style/card.modules.css";
import { server } from "../../tool";
import { useNavigate } from "react-router-dom";

const Card = props => {
    const navigate = useNavigate();

    const handleAddFavorite = () => {
        console.log("inside handle")
        localStorage.setItem("favorites", JSON.stringify(props.item));
        navigate("/favorite");
    };

    return (
        <div className="cardHome">
            <div className="title-box">
                <h4 className="card-title">{props.item.name}</h4>
                <img className="pointer" src="/favorites.png" alt="favorite icon" onClick={handleAddFavorite} width={20} height={20} />
            </div>
            <a className="styled-a" href={props.item.link} target="_blank" rel="noreferrer">
                <img src={`${server}/${props.item.image}`} alt="12" width="100%" height={200} />
            </a>
            <p className="card-p">{props.item.address}</p>
            <p className="card-p">{props.item.price}€</p>
            <p className="card-p">{props.item.type ? props.item.type : props.item.star}</p>
        </div>
    );
};

export default Card;
import "../../style/card.modules.css";
import { server } from "../../tool";

const Card = props => {
    return (
        <div className="cardHome">
            <a className="styled-a" href={props.item.link} target="_blank" rel="noreferrer">
                <h4 className="card-title">{props.item.name}</h4>
                <img src={`${server}/${props.item.image}`} alt="12" width="100%" height={200} />
                <p className="card-p">{props.item.address}</p>
                <p className="card-p">{props.item.price}€</p>
                <p className="card-p">{props.item.type ? props.item.type : props.item.star}</p>
                </a>
        </div>
    );
};

export default Card;
import "../../style/card.modules.css";

const Card = props => {
    return (
        <div className="cardHome">
            <img src={`/images/${props.item.id}`} alt="12" />
            <h4>
                {props.item.name}
            </h4>
            <p>
                {props.item.address}
            </p>
            <p>
                {props.item.price}€
            </p>
            <p>
                {props.item.type ? props.item.type : props.item.star}
            </p>
            {props.item.id}
        </div>
    );
};

export default Card;
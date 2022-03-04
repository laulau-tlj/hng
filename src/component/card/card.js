import styled from "styled-components";

const Card = props => {
    return (
        <div>
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
        </div>
    );
};

export default Card;
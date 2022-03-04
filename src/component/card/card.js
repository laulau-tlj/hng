import styled from "styled-components";

const Card = props => {
    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        margin: 1rem 0.5rem 1.5rem 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 8rem;
    `;

    return (
        <CardContainer>
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
        </CardContainer>
    );
};

export default Card;
import styled from "styled-components";

export const StyledButton = props => {
    const Button = styled.button`
        width: 10rem;
        border: none;
        padding: 0.2rem;
        border-radius: 30px;
        text-align: center;
        display: block;
        margin:auto;
        color: grey;
        border-color: rgb(201, 76, 76);
    `;

    return (
        <Button>{props.children}</Button>
    );
};
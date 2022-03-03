import styled from "styled-components";

export const StyledButton = props => {
    const Button = styled.button`
        width: 10rem;
        border: none;
        padding: 0.2rem;
        border-radius: 30px;
        text-align: center;
        color: #606060; 
    `;

    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
};
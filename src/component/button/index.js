import styled from "styled-components";

const Button = styled.button`
    width: 10rem;
    border: none;
    padding: 0.2rem;
    border-radius: 30px;
    text-align: center;
    color: #606060; 
`;

export const StyledButton = props => {

    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
};
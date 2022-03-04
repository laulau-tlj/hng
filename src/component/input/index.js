import styled from "styled-components";

export const StyledInput = props => {
    const Input = styled.input`
        width: 100%;
        height: 2rem;
        border: none;
        padding: 0.2rem;
        border-radius: 20px;
        text-align: center;
        clear: both;
        border-color: rgb(201, 76, 76);
        
    `;

    return (
        <Input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange} />
    );

};
import styled from "styled-components";

export const StyledInput = props => {
    const Input = styled.input`
        width: 20rem;
        height: 2rem;
        border: none;
        padding: 0.2rem;
        border-radius: 30px;
        text-align: center;
    `;

    return (
        <Input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange} />
    );
};
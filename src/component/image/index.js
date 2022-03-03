import styled from "styled-components";

export const Image = props => {
    const Image = styled.img`
        width: 20rem;
    `;

    return (
        <Image src={props.source} alt={props.alt} />
    )
}
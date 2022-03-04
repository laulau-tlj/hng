import styled from "styled-components";

export const Image = props => {
    const Image = styled.img`
        width: 20rem;
        transition: all 0.3s ease;
    `;

    return (
        <Image src={props.source} alt={props.alt} />
    )
}
// DEPENDENCIES IMPORTATIONS
import styled from "styled-components";
// STYLED-COMPONENTS 
import { Space } from "../space";

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Label = styled.label`
    color: white;
    font-size: 1.5rem;
`;

const Select = styled.select`
    border: none;
    border-radius: 30px;
    height: 1.5rem;
    text-align: center;
`;

const QuestionCard = props => {
    console.log(props.options)
    return (
        <QuestionContainer>
            <Label>{props.label}</Label>
            <Space>
                <Select>
                    {
                        props.options.map(option => (
                            <option key={option}>{option}</option>
                        ))
                    }
                </Select>
            </Space>
        </QuestionContainer>
    );
};

export default QuestionCard;
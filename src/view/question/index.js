import { useState } from "react";
// STYLED-COMPONENTS
import { Container } from "../../component/container";
// COMPONENTS IMPORTATIONS
import QuestionCard from "../../component/card/questionCard";

const Question = () => {
    const [activeTab, setActiveTab] = useState("question 1");

    const switchCase = () => {
        switch (activeTab) {
            case "question 1": {
                return (
                    <div>
                        <QuestionCard
                            label="Que souhaitez-vous faire ?"
                            options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]} />
                        <button onClick={() => goNext("question 2")}>Next</button>
                    </div>
                )
            }
            case "question 2": {
                return (
                    <div>
                        <QuestionCard
                            label="2"
                            options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]} />
                        <button onClick={() => goNext("question 3")}>Next</button>
                    </div>
                )
            }
            case "question 3": {
                return (
                    <div>
                        <QuestionCard
                            label="3"
                            options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]} />
                        <button onClick={() => goNext("question 4")}>Next</button>
                    </div>
                )
            }
            case "question 4": {
                return (
                    <div>
                        <QuestionCard
                            label="4"
                            options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]} />
                        <button>Next</button>
                    </div>
                )
            }
            default:
        };
    };

    const goNext = string => {
        setActiveTab(string)
    };

    return (
        <Container>
            {switchCase()}
        </Container>
    );
};

export default Question;
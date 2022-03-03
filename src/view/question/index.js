import { useState } from "react";
// STYLED-COMPONENTS
import { Container } from "../../component/container";
// COMPONENTS IMPORTATIONS
import QuestionCard from "../../component/card/questionCard";

const Question = () => {
    const [firstQuestion, setFirstQuestion] = useState(true);
    const [value, setValue] = useState("");
    const [choice, setChoice] = useState("");
    const [activeSwitch, setActiveSwitch] = useState(false);

    const restaurantChoice = () => {
        return (
            <div>
                <QuestionCard
                    label="Que souhaitez-vous manger ?"
                    options={["Americain", "Asiatique", "Europeen", "Latino"]} />
                <button>Next</button>
            </div>
        );
    };

    const museumChoice = () => {
        return (
            <div>
                <QuestionCard
                    label="Que souhaitez-vous visiter ?"
                    options={["Moderne", "Classique", "Atypique"]} />
                <button>Next</button>
            </div>
        );
    };

    const barChoice = () => {
        return (
            <div>
                <QuestionCard
                    label="Que souhaitez-vous boire ?"
                    options={["Cocktaaiiiiils", "Bière", "Je bois pas... soft :)"]} />
                <button>Next</button>
            </div>
        );
    };

    const hotelChoice = () => {
        return (
            <div>
                <QuestionCard
                    label="Que souhaitez-vous boire ?"
                    options={["1 étoile", "2 étoiles", "3 étoiles et plus"]} />
                <button>Next</button>
            </div>
        );
    };

    const switchCase = () => {
        switch (choice) {
            case "J'ai faim": {
                return restaurantChoice();
            }
            case "J'ai envie de visiter": {
                return museumChoice();
            }
            case "Allons boire un verre...": {
                return barChoice();
            }
            case "J'ai besoin d'un logement": {
                return hotelChoice();
            }
            default: console.log("error")
        };
    };

    const handleChange = () => {
        setActiveSwitch(true);
        setFirstQuestion(false);
    };

    return (
        <Container>
            {
                firstQuestion &&
                <div>
                    <QuestionCard
                        label="Que souhaitez-vous faire ?"
                        options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]}
                        setChoice={setChoice} />
                    <button onClick={handleChange}>Next</button>
                </div>
            }
            {
                activeSwitch && switchCase()
            }

        </Container>
    );
};

export default Question;
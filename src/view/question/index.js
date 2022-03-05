import { useState, useContext } from "react";
import "../../style/question.modules.css";
// CONTEXT IMPORTATION
import { ResponseContext } from "../../context/ResponseContext";
// DEPENDENCIES
import { useNavigate } from "react-router-dom";
// COMPONENTS IMPORTATIONS
import QuestionCard from "../../component/card/questionCard";

const Question = () => {
    const [firstQuestion, setFirstQuestion] = useState(true);
    const [choice, setChoice] = useState("");
    const [secondChoice, setSecondChoice] = useState("");
    const [activeSwitch, setActiveSwitch] = useState(false);
    const { response, setResponse } = useContext(ResponseContext);
    const navigate = useNavigate();

    const restaurantChoice = () => {
        return (
            <div className="questionContainer">
                <QuestionCard
                    label="Que souhaitez-vous manger ?"
                    options={["Americain", "Asiatique", "Europeen", "Latino"]}
                    setSecondChoice={setSecondChoice} />
                <button className="questionButton" onClick={handleSave}>Next</button>
            </div>
        );
    };

    const museumChoice = () => {
        return (
            <div className="questionContainer">
                <QuestionCard
                    label="Que souhaitez-vous visiter ?"
                    options={["Modern", "Classique", "Atypique"]}
                    setSecondChoice={setSecondChoice} />
                <button className="questionButton" onClick={handleSave}>Next</button>
            </div>
        );
    };

    const barChoice = () => {
        return (
            <div className="questionContainer">
                <QuestionCard
                    label="Que souhaitez-vous boire ?"
                    options={["Cocktaaiiiiils", "Bière", "Je bois pas... soft :)"]}
                    setSecondChoice={setSecondChoice} />
                <button className="questionButton" id="id" onClick={handleSave}>Next</button>
            </div>
        );
    };

    const hotelChoice = () => {
        return (
            <div className="questionContainer">
                <QuestionCard
                    label="Où souhaitez-vous loger ?"
                    options={["1 étoile", "2 étoiles", "3 étoiles et plus"]}
                    setSecondChoice={setSecondChoice} />
                <button className="questionButton" onClick={handleSave} s>Next</button>
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
            default: console.log(choice)
        };
    };

    const handleChange = async () => {
        setActiveSwitch(true);
        setFirstQuestion(false);
        await setResponse(choice);
    };

    const handleSave = async () => {
        setResponse([response, secondChoice]);
        navigate("/home");
    };

    return (
        <div className="container">
            {firstQuestion &&
                <div className="questionContainer">
                    <QuestionCard
                        label="Que souhaitez-vous faire ?"
                        options={["J'ai faim", "J'ai envie de visiter", "Allons boire un verre...", "J'ai besoin d'un logement"]}
                        setChoice={setChoice} />
                    <button className="questionButton mt-1" onClick={handleChange}>Next</button>
                </div>}
            {activeSwitch && switchCase()}
        </div>
    );
};

export default Question;
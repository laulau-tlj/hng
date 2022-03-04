const QuestionCard = props => {
    return (
        <div className="cardContainer">
            <div className="m-1 label">
                <label>{props.label}</label>
            </div>
            <div className="m-1">
                <select className="selectCard" onChange={e => { props.setChoice ? props.setChoice(e.target.value) : props.setSecondChoice(e.target.value) }}>
                    {
                        props.options.map(option => (
                            <option key={option}>{option}</option>
                        ))
                    }
                </select>
            </div>
        </div >
    );
};

export default QuestionCard;
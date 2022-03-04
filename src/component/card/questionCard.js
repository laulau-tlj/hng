const QuestionCard = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select onChange={e => { props.setChoice ? props.setChoice(e.target.value) : props.setSecondChoice(e.target.value) }}>
                {
                    props.options.map(option => (
                        <option key={option}>{option}</option>
                    ))
                }
            </select>
        </div >
    );
};

export default QuestionCard;
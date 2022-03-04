export const StyledButton = props => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    );
};
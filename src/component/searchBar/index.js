import "../../style/searchBar.modules.css";

const FilterBar = props => {
    return (
        <div className="filterContainer">
            <input 
                placeholder={props.placeholder}
                value={props.filter}
                onChange={props.onChange}
                className="styledInput"
                />
         </div>
    );
};

export default FilterBar;
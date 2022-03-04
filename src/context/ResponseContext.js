import { useState, createContext } from "react";

export const ResponseContext = createContext();

const ResponseProvider = props => {
    const [response, setResponse] = useState();
    const value = {
        response,
        setResponse,
    };
    
    return (
        <ResponseContext.Provider value={value}>
            {props.children}
        </ResponseContext.Provider>
    );
};

export default ResponseProvider
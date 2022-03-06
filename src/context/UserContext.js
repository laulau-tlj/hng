import { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = props => {
    const [user, setUser] = useState();
    const value = {
        user,
        setUser,
    };

    console.log("user in context", user)
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
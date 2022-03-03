import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";

const Login = () => {
    const [data, setData] = useState(null);

    useEffect(
        () =>
            onSnapshot(collection(db, "restaurant"), (snapshot) =>
                setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    return (
        <div>
            Login
        </div>
    );
};

export default Login;
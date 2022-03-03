import { useState, useEffect } from "react";
// FIREBASE CONNECTION
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase-config";
// STYLED-COMPONENTS
import { Container } from "../../component/container";

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
        <Container>
            Title
        </Container>
    );
};

export default Login;
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

    const logOutUser = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')

        }).catch((error) => {
          // An error happened.
          console.log(error.message)
        });
    }
    return (
        <div>
            <button onClick={logOutUser}>Sign Out</button>
        </div>
    );
};

export default Navbar;
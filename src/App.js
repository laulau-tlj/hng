import "./App.css";
// DEPENDENCIES IMPORTATIONS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// COMPONENTS IMPORTATIONS
import Login from "./view/login";
import Register from "./view/register";
import Favorite from "./view/favorite";
import Home from "./view/home";
import Question from "./view/question";
import Admin from "./view/admin";
// CONTENT IMPORTATIONS
import ResponseContext from './context/ResponseContext';
import UserContext from "./context/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserContext>
        <ResponseContext>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/favorite" element={<Favorite />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/question" element={<Question />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </ResponseContext>
      </UserContext>
    </BrowserRouter>
  );
};

export default App;
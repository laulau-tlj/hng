import { useContext } from "react";
import "./App.css";
// DEPENDENCIES IMPORTATIONS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// COMPONENTS IMPORTATIONS
import Login from "./view/login";
import Register from "./view/register";
import Favorite from "./view/favorite";
import Home from "./view/home";
import Question from "./view/question";
// CONTENT IMPORTATIONS
import ResponseContext from './context/ResponseContext';

const App = () => {
  return (
    <BrowserRouter>
      <ResponseContext>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/question" element={<Question />} />
        </Routes>
      </ResponseContext>
    </BrowserRouter>
  );
};

export default App;
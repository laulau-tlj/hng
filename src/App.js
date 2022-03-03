import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// COMPONENTS IMPORTATIONS
import Login from "./view/login";
import Register from "./view/register";
import Favorite from "./view/favorite";
import Home from "./view/home";
import Question from "./view/question";





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/favorite" element={<Favorite />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
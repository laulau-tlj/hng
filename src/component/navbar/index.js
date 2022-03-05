import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../style/navbar.modules.css";
import axios from "axios";
import { server } from "../../tool";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate();

  const dropdown = () => {
    return (
      <div className="dropdown">
        <ul className="pointer space" onClick={() => navigate("/question")}>New trip</ul>
        <ul className="pointer space" onClick={() => navigate("/favorite")}>Favorites</ul>
        <ul className="pointer space" onClick={logout}>Logout</ul>
      </div>
    );
  };

  const desktop = () => {
    return (
      <div className="navbarContainer">
        <img className="pointer" src="/newSearch.png" alt="newSearch icon" onClick={() => navigate("/question")} width={50} height={50} />
        <img className="pointer" src="/favorites.png" alt="favorites icon" onClick={() => navigate("/favorite")} width={40} height={40} />
        <img className="pointer" src="/logout.png" alt="logout icon" onClick={logout} width={40} height={40} />
      </div>
    );
  };

  const mobile = () => {
    return (
      <div>
        <div className="navbarContainer">
          <img className="pointer" src="logo.png" alt="logo" width={100} height={100} onClick={() => setIsShow(!isShow)} />
        </div>
        {isShow && dropdown()}
      </div>
    );
  };

  const logout = async () => {
    await axios.get(`${server}/logout`, { withCredentials: true })
      .then(res => {
        if (res.data.status === "success") { navigate("/") };
      });
  };

  return (
    <>
      {window.innerWidth < 768 ? mobile() : desktop()}
    </>
  );
};

export default Navbar;
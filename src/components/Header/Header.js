// Header.js

import { useSelector } from "react-redux";
import { IMG_LOGO } from "../../constant";
import { Link } from "react-router-dom";
import './Header.css'; // Import your CSS file for styling

const Title = () => (
  <>
    <img className="logo" alt="logo" src={IMG_LOGO} />
    <h2 className="title">Sharp-Lab</h2>
  </>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/transaction">Transaction</Link></li>
          <li><Link to="/data">Data</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

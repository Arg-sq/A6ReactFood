import { useEffect } from "react";
import "./navbar.css";
import { BASE_URL } from "../../config";
import axios from "axios";

const Navbar = ({ userProps, setterFunc }) => {
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        console.log(response, "res");
        setterFunc(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getUsers();
  }, []);
  return (
    <nav>
      <a href="#menu">Menu</a>
      <a href="#special">Special</a>
      <a href="#aboutus">About US</a>
      <a href="#contactus">Contact us</a>
    </nav>
  );
};

export default Navbar;

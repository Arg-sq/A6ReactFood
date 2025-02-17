import { useEffect, useState } from "react";
import "./header.css";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../config";
// import { BASE_URL } from "../../config";

const Header = ({ postProps, setPostProp }) => {
  // const [post, setPost] = useState([]);

  // useEffect(()=>{},[])
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setPostProp(response.data);
      } catch (e) {
        if (e instanceof AxiosError) {
          console.log(e);
        }
      }
    };
    getPost();
  }, []);
  console.log(postProps, "post");
  return (
    <header>
      <div>
        <h1>Welcome to Delicious Bites</h1>
        <p>Indulge in the flavors of perfection with our iconic dishes!</p>
      </div>
    </header>
  );
};

export default Header;

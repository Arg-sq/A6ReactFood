import { useEffect, useState } from "react";
import "./header.css";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../config";

const Header = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    // const getPost = async () => {
    //   const response = await axios.get(`${BASE_URL}/post`);
    //   setPost(response.data);
    // };
    // try {
    //   getPost();
    // } catch (e) {
    //   if (e instanceof AxiosError) {
    //     console.log(e.message, "dfghjkhgf");
    //   }
    //   console.log("error ayo");
    // }
    const getPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setPost(response.data);
      } catch (e) {
        if (e instanceof AxiosError) {
          console.log(e);
        }
      }
    };
    getPost();
  }, []);
  console.log(post, "post");
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

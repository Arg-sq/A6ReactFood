import React, { useState } from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import ChefSpecial from "./chefSpecial/ChefSpecial";

const LandinPage = () => {
  const [post, setPost] = useState([]);

  const [user, setUser] = useState([]);
  return (
    <div>
      <Header postProps={post} setterFunc={setPost} />
      <Navbar userProps={user} setterFunc={setUser} />
      <Menu />
      <ChefSpecial />
    </div>
  );
};

export default LandinPage;

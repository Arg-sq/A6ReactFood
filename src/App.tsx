import { useState } from "react";
import ChefSpecial from "./pages/chefSpecial/ChefSpecial";
import Header from "./pages/header/Header";
import Menu from "./pages/menu/Menu";
import Navbar from "./pages/navbar/Navbar";

function App() {
  // let post=[]
  const [post, setPost] = useState([]);

  const [user, setUser] = useState([]);
  console.log(post, "post");
  return (
    <div>
      <Header postProps={post} setterFunc={setPost} />
      <Navbar userProps={user} setterFunc={setUser} />
      <Menu />
      <ChefSpecial />
    </div>
  );
}

export default App;

// App- Header- profile -logout
// contextAPI,
// redux, zustand

globalstore;

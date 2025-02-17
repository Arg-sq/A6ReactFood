import { useEffect, useState } from "react";
import ChefSpecial from "./pages/chefSpecial/ChefSpecial";
import Header from "./pages/header/Header";
import Menu from "./pages/menu/Menu";
import Navbar from "./pages/navbar/Navbar";

function App() {
  // const [khaneKura, setKhaneKura] = useState("samosa");
  // console.log(khaneKura, "<-------");
  // const changeKhaja = () => {
  //   setKhaneKura("sandwich");
  // };
  const [post, setPost] = useState([]);

  // console.log(jaggas, "jaggas");
  // useEffect(() => {
  //   console.log("component mount");
  //   return () => {
  //     console.log("component unmiunt");
  //   };
  // }, [jaggas]);
  return (
    <div>
      <Header postProps={post} setPostProp={setPost} />
      <Navbar />
      <Menu />
      <ChefSpecial />
    </div>
  );
}

export default App;

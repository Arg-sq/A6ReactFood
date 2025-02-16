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
  const [jaggas, setJaggas] = useState([
    { id: 1, name: "ktm" },
    { id: 1, name: "Pkr" },
  ]);
  // console.log(jaggas, "jaggas");
  // useEffect(() => {
  //   console.log("component mount");
  //   return () => {
  //     console.log("component unmiunt");
  //   };
  // }, [jaggas]);
  return (
    <div>
      <button
        onClick={() => {
          setJaggas((prev) => [...prev, { id: +new Date(), name: "hjhj" }]);
        }}
      >
        add khaja
      </button>
      <Header />
      <Navbar />
      <Menu />
      <ChefSpecial />
    </div>
  );
}

export default App;

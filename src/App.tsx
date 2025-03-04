import LandinPage from "./pages/LandinPage";
import Menu from "./pages/menu/Menu";

import { useRoutes } from "react-router-dom";

function App() {
  const openRoute = [
    { path: "/", element: <LandinPage /> },
    { path: "/login", element: <Menu /> },
  ];

  const element = useRoutes(openRoute);

  return <>{element}</>;
}

export default App;

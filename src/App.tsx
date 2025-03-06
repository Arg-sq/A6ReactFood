import LandinPage from "./pages/LandinPage";

import { useRoutes } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  const openRoute = [{ path: "/login", element: <Login /> }];

  const authRoute = [{ path: "/", element: <LandinPage /> }];

  const element = useRoutes(openRoute);

  return <>{element}</>;
}

export default App;

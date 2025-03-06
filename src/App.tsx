import LandinPage from "./pages/LandinPage";

import { useNavigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const localStorageVAlue =
    localStorage.getItem("JWT_token") ||
    '{"access_token":"","refresh_token":""}';

  const isuserAutheticated = !!JSON.parse(localStorageVAlue)?.refresh_token;
  console.log(isuserAutheticated, "isuserAutheticated");

  const openRoute = [{ path: "/login", element: <Login /> }];

  const authRoute = [{ path: "/", element: <LandinPage /> }];

  const element = useRoutes(isuserAutheticated ? authRoute : openRoute);

  useEffect(() => {
    if (!isuserAutheticated) {
      navigate("/login");
    }
  }, [isuserAutheticated]);

  return <>{element}</>;
}

export default App;

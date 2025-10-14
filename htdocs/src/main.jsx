import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import "./index.css";
import Menu from "./components/Menu";
import ToTop from "./components/ToTop";
import Loading from "./assets/Loading";
import "./assets/icons";

const Start = lazy(() => import("./routes/Start"));
const Login = lazy(() => import("./routes/Login"));
const Signup = lazy(() => import("./routes/Signup"));
const Home = lazy(() => import("./routes/Home"));

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu navigate={navigate} />
      <Suspense fallback={<Loading />}>
        <Outlet />
        <ToTop tab={7} />
      </Suspense>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

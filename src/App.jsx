import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Loop } from "@mui/icons-material";
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Error = lazy(() => import("./pages/Error"));
const Layout = lazy(() => import("./pages/Layout"));
const Single = lazy(() => import("./pages/Post"));
const Write = lazy(() => import("./pages/Write"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  return (
    <Suspense
      fallback={
        <Loop className="rotate-icon !text-[40px] absolute left-1/2 top-1/2" />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

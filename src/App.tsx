import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "@layout";
import {Home, About} from "@pages";
import "./reset.css";
import "./_global.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 page not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

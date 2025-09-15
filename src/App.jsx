import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/recipe/:id",
          element: <RecipeDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "@/screens/home";
import "@/index.css";
import "@mantine/core/styles.css";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;

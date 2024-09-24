import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllCards } from "./components/AllCards";
import { CardDetails } from "./components/CardDetails.jsx";
import { FavouritesCards } from "./components/FavouritesCards.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipes",
    element: <AllCards />,
  },
  { path: "/recipes/:cardId", element: <CardDetails /> },
  { path: "/favourites", element: <FavouritesCards /> },
  { path: "/favourites/:cardId", element: <CardDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

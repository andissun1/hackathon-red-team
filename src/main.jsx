import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/routes";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./index.css";
import { ThemeProvider } from "./Theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

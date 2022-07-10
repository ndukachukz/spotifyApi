import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { firebaseApp } from "./config/index";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./constants";

firebaseApp();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

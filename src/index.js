import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import Payment from "./pages/payment/Payment";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-i3miicoi783dd26g.us.auth0.com"
    clientId="s46dWW1hEi2laTSrJUlIpJqLB2yC6AqC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App /><Payment />
    </PersistGate>
  </Provider>
  </Auth0Provider>
);
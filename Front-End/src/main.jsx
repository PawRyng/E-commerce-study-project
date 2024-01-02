import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Style/reset.css"

import { GlobalStateProvider } from './state/isOpenStore.jsx';

//import views

import MainView from './views/main-view.jsx';
import CartView from './views/cart-view.jsx';


//import loaders
import { loader as bestsellersLoader}  from "./loaders/bestsellerLoader.jsx";
import { loader as cartLoader}  from "./loaders/cartLoader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    loader: bestsellersLoader
  },
  {
    path: "/:categoryName",
    element: <div>TEST</div>,
  },
  {
    path: "/cart",
    element: <CartView />,
    loader: cartLoader
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>,
)

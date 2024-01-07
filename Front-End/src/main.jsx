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
import ProductView from './views/product-view.jsx';
import ListingView from './views/listing-view.jsx';
import CategoryView from './views/category-view.jsx';



//import loaders
import { loader as bestsellersLoader}  from "./loaders/bestsellerLoader.jsx";
import { loader as cartLoader}  from "./loaders/cartLoader.jsx";
import { loader as productLoader}  from "./loaders/productLoader.jsx";
import { loader as productsLoader}  from "./loaders/productsLoader.jsx";
import { loader as categoryLoader}  from "./loaders/categoryLoader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    loader: bestsellersLoader
  },
  {
    path: "product/:productID",
    element: <ProductView />,
    loader: productLoader,
    errorElement: <div>error</div>
    
  },
  {
    path: "products/",
    element: <ListingView />,
    loader: productsLoader,
    errorElement: <div>error</div>
    
  },
  {
    path: "products/:categoryName",
    element: <CategoryView />,
    loader: categoryLoader,
    errorElement: <div>error</div>
    
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

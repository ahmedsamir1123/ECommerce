
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Singleproduct from './components/Singleproduct/Singleproduct';
import Cart from './components/Cart/Cart';
import Loader from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import SecurtyUrl from './components/SecurtyUrl/SecurtyUrl';

function App() {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const route = createBrowserRouter([
    {
      path: "", element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "", element: <SecurtyUrl element={<Home />} /> },
        { path: "singleproduct/:id", element: <SecurtyUrl element={<Singleproduct />} /> },
        { path: "cart", element: <SecurtyUrl element={<Cart />} /> },
        { path: "checkout", element: <SecurtyUrl element={<Checkout />} /> },




      ]
    }
  ])
  return (
    <>

      <Provider store={store}>
        {isLoading ? <Loader /> : <RouterProvider router={route} />}


      </Provider>

    </>
  )
}

export default App

import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/auth/authSlice";
import siteLogo from "../../assets/images/freshcart-logo.svg"
export default function Navbar() {

  const numcart = useSelector((state: RootState) => state.cart.numOfCartItems);

  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function logout() {
    dispatch(clearToken());
    nav('/login')
  }

  return (
    <>



      <nav className="bg-blue-400 border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={siteLogo} className="h-8" alt="Flowbite Logo" />
          </Link>


          <div className="w-1/2  md:block md:w-auto" >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-400">
              {token ?
                <div className="flex gap-2">
                  <li className="my-auto"> <Link to='/cart'><i className="fa-solid fa-cart-shopping text-blue-700"></i>
                    <span>{numcart}</span>
                  </Link>
                  </li>
                  <li>
                    <button onClick={logout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">SIgn out                </button>
                  </li></div> : <div className="flex gap-2">      <li>

                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "><NavLink to="/register" className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 ">Sign up</NavLink>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "><NavLink to="/login" className="block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 ">Sign in</NavLink>
                    </button>

                  </li></div>}




            </ul>
          </div>
        </div>
      </nav>



    </>
  )
}

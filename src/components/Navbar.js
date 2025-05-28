import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
      <nav className="flex flex-row justify-between mx-auto items-center h-20 max-w-6xl">

        <NavLink to="/">
          <div className="ml-5">
          <img 
          className="h-14 " 
          src="../logo.png"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 && 
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce text-white rounded-full">{cart.length}</span>
                  }
              </div>
            </NavLink>
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
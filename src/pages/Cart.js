import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (<div>
    {
      cart.length > 0 ?
        (
          <div className="flex justify-center px-4 py-8 gap-8">
            <div className=" w-[600px] flex flex-col gap-6 p-2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            <div className="flex flex-col justify-between items-start w-[300px] min-h-4 p-4 bg-white shadow-md rounded-md">
              <div>
                <h2 className="text-green-600 font-bold uppercase text-sm">Your Cart</h2>
                <h1 className="text-green-600 font-bold text-3xl uppercase mb-4">Summary</h1>
                <p className="mb-4 text-base font-medium">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-6">
                  Total Amount: <span className="text-black">${totalAmount}</span>
                </p>
                <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-md transition duration-200">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) :
        (<div className="flex flex-col justify-between items-center w-full mt-64">
          <h1 className="font-semibold text-xl">Cart Empty</h1>
          <Link to="/">
            <button className="bg-green-600 font-semibold m-1 p-2 px-4 hover:bg-green-600 text-white transition duration-200 rounded-full">
              Shop Now
            </button>
          </Link>
        </div>
        )
    }

  </div>);
};

export default Cart;
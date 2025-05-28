import toast from "react-hot-toast";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }
  return (
    <div>
      <div className="flex gap-4 border p-4 rounded-md shadow-sm">
        <div>
          <img src={item.image} alt={item.title} className="w-28 h-28 object-contain" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description.slice(0,100)}...</p>
          <div className="flex justify-between items-center">
            <p className="text-green-700 font-bold">${item.price}</p>
            <div 
            className="text-red-500 bg-red-100 hover:bg-red-200 p-2 rounded-full"
            onClick={removeFromCart}>
              <RiDeleteBin6Fill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
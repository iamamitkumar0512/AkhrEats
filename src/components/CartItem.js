import { useDispatch, useSelector } from "react-redux";
import { decreseQuantity, increaseQuantity } from "../utils/CartSlice";
import { imageUrl } from "../utils/config";
const CartItem = ({ itemList }) => {
  const dispatch = useDispatch();
  console.log(itemList);
  let price = itemList?.price;
  let defaultPrice = itemList?.defaultPrice;
  let finalPrice = defaultPrice ? defaultPrice : price;
  return (
    <div className="cartItem" key={itemList?.id}>
      <div className="cartItemNamePic">
        <h3>{itemList?.name}</h3>
        <img className="cartPic" src={imageUrl + itemList?.imageId}></img>
      </div>
      <div className="cartItemNamePic">
        <div className="cartBtnFlex">
          <button onClick={() => {
            dispatch(decreseQuantity(itemList.id))
          }}>-</button>
          <h5>{itemList.quantity}</h5>
          <button onClick={() => {
            dispatch(increaseQuantity(itemList.id))
          }}>+</button>
        </div>
        <h5>Price:{finalPrice / 100}</h5>
      </div>
    </div>
  );
};

export default CartItem;

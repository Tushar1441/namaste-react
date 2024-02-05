import { clearCart } from "../utils/cartSlice";
import ItemCardComponent from "./ItemCardComponent";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const uniqueItems = [...new Set(items)];

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-body">
      <div className="cart-upper">
        <h1> Cart</h1>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {items.length === 0 && (
        <div className="cart-display">
          <h1>Your Cart is Empty. Please add items to your cart.</h1>
        </div>
      )}

      <ItemCardComponent items={uniqueItems} />
    </div>
  );
};

export default Cart;

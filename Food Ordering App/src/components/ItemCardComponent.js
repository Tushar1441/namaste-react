import { ITEM_IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { FaRegCaretSquareUp } from "react-icons/fa";

const ItemCardComponent = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);
  // const count = cartItems.length;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="item-cards">
      {items.map((item) => (
        <div data-testid="item-card" key={item.card.info.id}>
          <div className="item-card-container">
            <div className="item-card-details-container">
              <span>
                <FaRegCaretSquareUp
                  className={
                    item.card.info.itemAttribute.vegClassifier === "VEG"
                      ? "veg-icon"
                      : "non-veg-icon"
                  }
                />
              </span>
              <h3 className="item-name-text">{item.card.info.name}</h3>
              <div className="item-price">
                <span className="rupee">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <span className="item-desc">{item.card.info.description}</span>
            </div>
            <div className="item-img-container">
              <div className="add-btn-container" >
                {cartItems.includes(item) === false ? (
                  <button
                    className="add-btn"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="addrem-btn-container">
                    <button onClick={() => handleRemoveItem(item)}>-</button>
                    <span>
                      {cartItems.reduce(
                        (count, cartItem) =>
                          cartItem === item ? count + 1 : count,
                        0
                      )}
                    </span>
                    <button onClick={() => handleAddItem(item)}>+</button>
                  </div>
                )}
              </div>

              {item.card.info.imageId && (
                <img
                  className="item-img"
                  width="256"
                  src={ITEM_IMG_URL + item.card.info.imageId}
                />
              )}
            </div>
          </div>
          <div className="styles-divider"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemCardComponent;

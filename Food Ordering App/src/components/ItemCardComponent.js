import { ITEM_IMG_URL } from "../utils/constants";
import { FaRegCaretSquareUp } from "react-icons/fa";

const ItemCardComponent = ({ itemCardData }) => {
  const { name, description, price, imageId, isVeg } = itemCardData?.card?.info;

  return (
    <div className="item-card">
      <div className="item-card-container">
        <div className="item-card-container-01">
          <div className="item-card-details-container">
            <div>
              <FaRegCaretSquareUp className="dish-type-icon" />
            </div>
            <div className="item-name">
              <h3 className="item-name-text">{name}</h3>
            </div>
            <div className="item-portion-container">
              <span className="item-price">
                <span className="rupee">₹{price / 100}</span>
              </span>
            </div>
            <div className="item-desc">{description}</div>
          </div>
          <div className="item-img-container">
            <button className="item-img-btn">
              <img
                className="item-img"
                loading="lazy"
                width="256"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  imageId
                }
              />
            </button>
          </div>
        </div>
      </div>
      <div className="styles-divider"></div>
    </div>
  );
};

export default ItemCardComponent;

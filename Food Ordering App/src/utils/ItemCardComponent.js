import { ITEM_IMG_URL } from "../utils/constants";
import { FaRegCaretSquareUp } from "react-icons/fa";

const ItemCardComponent = ({ items }) => {
  return (
    <div className="item-cards">
      {items.map((item) => (
        <div>
          <div key={item.card.info.id} className="item-card-container">
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
              <img
                className="item-img"
                width="256"
                src={ITEM_IMG_URL + item.card.info.imageId}
              />
            </div>
          </div>
          <div className="styles-divider"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemCardComponent;

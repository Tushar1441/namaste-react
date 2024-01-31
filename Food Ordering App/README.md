
## Layout of Bitebuddy App

* Header
    - Logo 
    - Nav-items

* Body 
    - Search Bar
    - Restraunt Container
      - Restraunt Cards
        - Food img
        - Rest Name
        - Cuisines, Star rating, Preperation Time
* Footer
    - Copyright
    - links
    - Contact Details
    - Address


import { ITEM_IMG_URL } from "../utils/constants";
import { FaRegCaretSquareUp } from "react-icons/fa";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="item-card">Hello World!</div>
      ))}
    </div>
  );
};

export default ItemList;

/***
 *         <div key={item.card.info.name} className="item-card">
          <div className="item-card-details-container">
            <span>
              <FaRegCaretSquareUp
                className={
                  item.card.info.itemAttribute.vegClassifier === "VEG" ? "veg-icon" : "non-veg-icon"
                }
              />
            </span>
            <h3 className="item-name-text">{item.card.info.name}</h3>
            <div className="item-price">
              <span className="rupee">₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
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
 */

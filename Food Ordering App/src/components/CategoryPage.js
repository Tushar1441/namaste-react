import { DOWN_ARROW } from "../utils/constants";
import { useState } from "react";
import useRestaurantItems from "../utils/useRestaurantItems";
import ItemCardComponent from "../utils/ItemCardComponent";

const CategoryPage = ({ categoryData }) => {
  const { title, itemCards, categories } = categoryData?.card.card;
  const ItemCards = useRestaurantItems(itemCards, categories);

  const [showItem, setShowItem] = useState(true);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="category-container">
      <div className="category-item">
        <button
          className="res-menu-item-btn res-menu-item-margin "
          onClick={handleClick}
        >
          <h3 className="res-menu-item-heading">
            {title} ({ItemCards.length})
          </h3>
          <span className={showItem ? "icon-down-arrow" : "icon-up-arrow"}>
            {DOWN_ARROW}
          </span>
        </button>
      </div>
      {showItem && <ItemCardComponent items={ItemCards} />}

      <div className="main-border"></div>
    </div>
  );
};

export default CategoryPage;

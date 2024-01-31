import { DOWN_ARROW } from "../utils/constants";
import useRestaurantItems from "../utils/useRestaurantItems";
import ItemList from "./Itemlist";

const CategoryPage = ({ categoryData }) => {
  const { title, itemCards, categories } = categoryData?.card.card;
  const ItemCards = useRestaurantItems(itemCards, categories);

  return (
    <div className="category-container">
      <div className="category-item">
        <button className="res-menu-item-btn res-menu-item-margin ">
          <h3 className="res-menu-item-heading">
            {title} ({ItemCards.length})
          </h3>
          {/* className={show ? "icon-down-arrow" : "icon-up-arrow"} */}
          <span>{DOWN_ARROW}</span>
        </button>
      </div>
      <ItemList items={ItemCards} />
      <div className="main-border"></div>
    </div>
  );
};

export default CategoryPage;

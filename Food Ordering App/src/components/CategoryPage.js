import { DOWN_ARROW } from "../utils/constants";
import ItemCardComponent from "./ItemCardComponent";

const CategoryPage = (props) => {
  const { categoryData } = props;

  const { title, itemCards } = categoryData?.card.card;

  return (
    <div className="category-container" id={title}>
      <div className="category-item">
        <button className="res-menu-item-btn res-menu-item-margin ">
          <h3 className="res-menu-item-heading">
            <span>
              {title} ({itemCards.length})
            </span>
          </h3>
          <span className="icon-down-arrow">{DOWN_ARROW}</span>
        </button>
        <div className="item-cards">
          {itemCards.map((itemCard) => (
            <ItemCardComponent
              key={itemCard.card.info.id}
              itemCardData={itemCard}
            />
          ))}
        </div>
      </div>
      <div className="main-border"></div>
      <div className="min-scrollPoint"></div>
    </div>
  );
};

export default CategoryPage;

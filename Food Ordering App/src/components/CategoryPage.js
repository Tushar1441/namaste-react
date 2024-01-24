import { DOWN_ARROW } from "../utils/constants";
import ItemCardComponent from "./ItemCardComponent";

const CategoryPage = (props) => {
  const { categoryData } = props;
  const { title, itemCards, categories } = categoryData?.card.card;

  let ItemCards = [];

  if (categories === undefined) {
    ItemCards = itemCards;
  } else {
    categories.map((category) => {
      category.itemCards.map((itemCard) => {
        ItemCards.push(itemCard);
      });
    });
  }

  return (
    <div className="category-container" id={title}>
      <div className="category-item">
        <button className="res-menu-item-btn res-menu-item-margin ">
          <h3 className="res-menu-item-heading">
            <span>{title} ({ItemCards.length})</span>
          </h3>
          <span className="icon-down-arrow">{DOWN_ARROW}</span>
        </button>
        <div className="item-cards">
          {ItemCards.map((ItemCard) => (
            <ItemCardComponent
              key={ItemCard.card.info.id}
              itemCardData={ItemCard}
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

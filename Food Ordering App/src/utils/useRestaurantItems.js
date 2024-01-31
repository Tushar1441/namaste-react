const useRestaurantItems = (itemCards, categories) => {
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

  return ItemCards;
};

export default useRestaurantItems;

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <span>Filters:</span>
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4);
            console.log(resList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <hr className="body-break"></hr>
      <h2 className="res-heading">Restraunt With Food Delivery in Your Area</h2>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
console.log(resList);
export default Body;

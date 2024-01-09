import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import { FILTER_ICON, Swiggy_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const handleFilter = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch({Swiggy_API});
    const json = await data.json;

    console.log(json);
  };

  return (
    <div className="body">
      <hr className="body-break"></hr>
      <div className="main-heading">
        <h2>Restraunt With Food Delivery in Your Area</h2>
      </div>
      <div className="filter">
        <button className="filter-btn filter-main">
          Filters {FILTER_ICON}
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

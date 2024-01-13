import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FILTER_ICON, SEARCH_ICON, Swiggy_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtnText, setSearchBtnText] = useState("");

  const fetchData = async () => {
    const data = await fetch(Swiggy_API);
    const json = await data.json();
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const topRestaurantFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  const searchFilter = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchBtnText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          value={searchBtnText}
          placeholder="Search For restaurants and foods"
          className="search-input"
          onChange={(e) => {
            setSearchBtnText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={searchFilter}>
          {SEARCH_ICON}
        </button>
      </div>
      <hr className="body-break"></hr>
      <div className="main-heading">
        <h2>Restraunt With Food Delivery in Your Area</h2>
      </div>
      <div className="filter">
        <button className="filter-btn filter-main">
          Filters {FILTER_ICON}
        </button>
        <button className="filter-btn" onClick={topRestaurantFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

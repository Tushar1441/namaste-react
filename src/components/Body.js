import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FILTER_ICON, SEARCH_ICON, SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtnText, setSearchBtnText] = useState("");

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const restaurantData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
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
          data-testid="searchInputBox"
          placeholder="Search For restaurants and foods"
          className="search-input"
          onChange={(e) => {
            setSearchBtnText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          data-testid="searchBtn"
          onClick={searchFilter}
        >
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
        <button
          className="filter-btn"
          data-testid="topRatedFilterBtn"
          onClick={topRestaurantFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="res-card"
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

/**
 * const onlineStatus = useOnlineStatus();

 * if (onlineStatus === false)
  return (
    <h1>
      Looks like You are disconnected from the internet. Please check your
      internet connection!
    </h1>
  );
*/

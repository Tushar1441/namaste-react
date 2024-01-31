import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FILTER_ICON, SEARCH_ICON, Swiggy_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtnText, setSearchBtnText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(Swiggy_API);
      const json = await data.json();
      const restaurantData =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
          <Link className="res-card" to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />{" "}
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

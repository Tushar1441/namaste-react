import { FILTER_ICON } from "../utils/constants";

const Shimmer = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
        />
        <button className="search-btn filter-btn" >
          Search
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
        <button className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>

      <div className="shimmer-container res-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;

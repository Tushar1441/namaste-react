import {
  RES_URL,
  COST_ICON,
  TIME_ICON,
  STAR_ICON,
  DOWN_ARROW,
} from "../utils/constants";
import Shimmer from "./Shimmer";
import CategoryPage from "./CategoryPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(RES_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    locality,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="res-body">
      <div className="res-page">
        <div>
          <div className="res-header">
            <div className="res-complete-info">
              <div className="res-name-address">
                <div>
                  <p className="res-name-1">{name}</p>
                  <p className="res-cuisines-1">{cuisines.join(", ")}</p>
                </div>
                <div className="res-name-address-area">
                  <p className="res-area-1">{locality}</p>
                </div>
              </div>
              <button className="res-ratings-wrapper">
                <span className="res-rating-1">
                  <span className="icon-star">{STAR_ICON}</span>
                  <span>{avgRating}</span>
                </span>
                <span className="totalRatings">{totalRatingsString}</span>
              </button>
            </div>
            <ul></ul>
            <hr className="res-dotted-seperator"></hr>
            <div className="res-margin-bottom">
              <ul className="res-time-cost">
                <li className="res-time-cost-item">
                  {TIME_ICON}
                  <span>{sla.slaString}</span>
                </li>
                <li className="res-time-cost-item">
                  {COST_ICON}
                  <span>{costForTwoMessage}</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="res-page-seperator"></hr>
          <div className="categories-container">
            {cards.slice(2, -2).map((card, index) => (
              <CategoryPage key={index} categoryData={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

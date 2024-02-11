import { CDN_URL, STAR_ICON } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, areaName, sla, cuisines } =
    resData?.info;

  return (
    <div className="res-card" data-testid="resCard">
      <img
        className="res-img"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details">
        <p className="res-name">{name}</p>
        <div className="min-details">
          <div className="rating">
            {STAR_ICON}
            <p className="star-rating">{avgRating} •</p>
          </div>
          <p className="time-req">{sla.slaString}</p>
        </div>
        <div className="last-details">
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p className="res-address">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

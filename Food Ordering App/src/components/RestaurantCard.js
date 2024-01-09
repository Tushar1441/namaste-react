import { CDN_URL, STAR_ICON } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    avgRating,
    costForTwo,
    sla,
    cuisines,
    locality,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card">
      <div className="res-img">
        <img alt="res-image" src={CDN_URL + resData.info.cloudinaryImageId} />
      </div>
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="min-details">
          <div className="rating">
            {STAR_ICON}
            <span className="star-rating">{avgRating} •</span>
          </div>
          <span className="time-req">{sla.slaString}</span>
        </div>
        <div className="last-details">
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p className="res-address">{locality}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

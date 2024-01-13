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
          <p className="res-address">{locality}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

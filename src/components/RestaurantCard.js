import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //const { resData } = props;
  //console.log(props);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  const resImg = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={resImg} />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;

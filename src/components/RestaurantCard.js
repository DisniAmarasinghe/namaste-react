import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //const { resData } = props;
  //console.log(props);
  const { name, cuisines, rating, costForTwo, imageId } = resData?.data;
  const resImg = `${CDN_URL}${imageId}.jpeg`;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={resImg} />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{rating}</h3>
      <h3>Rs. {costForTwo / 100} for two</h3>
    </div>
  );
};

export default RestaurantCard;

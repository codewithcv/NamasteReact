import { CLOUD_IMAGE_URL } from "../utils/constants";

const RestCards = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = props.reslist;
  return (
    <div id="res-cards">
      <img
        src={CLOUD_IMAGE_URL + cloudinaryImageId}
        alt="Restaurant Cards"
      ></img>
      <h5>{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo / 100} for two</h6>
      <h6>{avgRating} stars</h6>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

export default RestCards;

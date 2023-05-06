import { useParams } from "react-router-dom";
import { CLOUD_IMAGE_URL } from "../utils/constants";
import useResDetails from "../utils/useResDetails";

const ResDetails = () => {
  const { id } = useParams();
  const { resMenuInfo, restInfo } = useResDetails(id);

  return (
    <>
      {resMenuInfo?.length > 0 ? (
        <div className="res-details">
          <img
            src={CLOUD_IMAGE_URL + restInfo?.cloudinaryImageId}
            alt="Restaurant Image"
          ></img>
          <h1>{restInfo?.name}</h1>
          <h3>{restInfo?.costForTwoMessage}</h3>
          <h3>Menu items</h3>
          <ul className="menu-items">
            {resMenuInfo?.map((item) =>
              item?.card?.card?.itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name +
                    " - RS " +
                    item?.card?.info?.price / 100}
                </li>
              ))
            )}
          </ul>
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </>
  );
};
export default ResDetails;

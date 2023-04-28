import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_URL, CLOUD_IMAGE_URL } from "../utils/constants";

const filterReaturantData = (resData) => {
  const resturantData = resData?.filter((item) => {
    return item?.card?.card?.hasOwnProperty("info");
  });
  return resturantData;
};

const filterMenu = (menuData) => {
  const menuItems = menuData?.filter((item) => {
    return item?.hasOwnProperty("groupedCard");
  });
  return menuItems;
};

const ResDetails = () => {
  const { id } = useParams();
  const [restInfo, setRestInfo] = useState({});
  const [resMenuInfo, setResMenuInfo] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      `${RESTAURANT_DETAIL_URL}${id}&submitAction=ENTER`
    );
    const json = await data.json();
    const filteredReaturantData = filterReaturantData(json?.data?.cards);
    const filteredMenu = filterMenu(json?.data?.cards);
    const restaurantInfo = filteredReaturantData[0]?.card?.card?.info;
    const menuInfo = filteredMenu[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log("json?.data?.cards", json?.data?.cards);
    console.log("restaurantInfo", restaurantInfo);
    console.log("menuInfo", menuInfo);
    setRestInfo(restaurantInfo);
    setResMenuInfo(menuInfo);
  };

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

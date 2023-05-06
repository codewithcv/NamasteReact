import { useState, useEffect } from "react";
import { RESTAURANT_DETAIL_URL } from "./constants";

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

const useResDetails = (id) => {
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
    const restaurantInfo =
      filteredReaturantData &&
      filteredReaturantData.length > 0 &&
      filteredReaturantData[0]?.card?.card?.info;
    const menuInfo =
      filteredMenu &&
      filteredMenu.length > 0 &&
      filteredMenu[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setRestInfo(restaurantInfo);
    setResMenuInfo(menuInfo);
  };
  return { resMenuInfo, restInfo };
};
export default useResDetails;

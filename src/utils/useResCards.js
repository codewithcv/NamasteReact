import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

const filterJSONData = (jsonData) => {
  const filteredJSONData = jsonData?.data?.cards?.filter((data) => {
    return data.cardType === "seeAllRestaurants";
  });
  return filteredJSONData;
};

const useResCards = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [apiCompleted, setAPICompleted] = useState(false);
  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_URL);
      const json = await data.json();
      const filteredData = filterJSONData(json);
      setRestaurantList(filteredData[0]?.data?.data?.cards);
      setAPICompleted(true);
    } catch (error) {
      console.log("error in API ->", error);
    }
  };
  return { restaurantList, apiCompleted };
};
export default useResCards;

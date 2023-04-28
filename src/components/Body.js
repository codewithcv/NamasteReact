import RestCards from "./RestCards";
//import { restaurantData } from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const topRestaurants = (listOfRestaurant) => {
  const filteredRestuarant = listOfRestaurant?.filter((restaurant) => {
    return restaurant.data.avgRating > 4.0;
  });
  return filteredRestuarant;
};

const searchedRestaurant = (searchText, listOfRestaurant) => {
  const filteredRestuarant = listOfRestaurant?.filter((restuarant) => {
    return restuarant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredRestuarant;
};

const filterJSONData = (jsonData) => {
  const filteredJSONData = jsonData?.data?.cards?.filter((data) => {
    return data.cardType === "seeAllRestaurants";
  });
  return filteredJSONData;
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
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
      setFilteredRestaurantList(filteredData[0]?.data?.data?.cards);
      setAPICompleted(true);
    } catch (error) {
      console.log("error in API ->", error);
    }
  };

  return (
    <div id="body-container">
      <input
        type="text"
        placeholder="Search Restaurants"
        value={searchRestaurant}
        onChange={(e) => {
          let searchText = e.target.value;
          setSearchRestaurant(searchText);
          const searchedRestaurantList = searchedRestaurant(
            searchText,
            restaurantList
          );
          setFilteredRestaurantList(searchedRestaurantList);
        }}
      ></input>
      <button
        className="top-restaurants"
        onClick={() => {
          const topRestaurantsList = topRestaurants(restaurantList);
          setFilteredRestaurantList(topRestaurantsList);
        }}
      >
        Show Top Restaurants
      </button>
      <button
        className="all-restaurants"
        onClick={() => {
          setFilteredRestaurantList(restaurantList);
        }}
      >
        Show All Restaurants
      </button>
      <div id="res-cards-container">
        {filteredRestaurantList?.length > 0 ? (
          filteredRestaurantList.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestCards
                key={restaurant.data.id}
                reslist={restaurant.data}
              ></RestCards>
            </Link>
          ))
        ) : apiCompleted ? (
          <h1>No Results found</h1>
        ) : (
          <ShimmerUI></ShimmerUI>
        )}
      </div>
    </div>
  );
};

export default Body;

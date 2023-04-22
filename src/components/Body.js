import RestCards from "./RestCards";
//import { restaurantData } from "../utils/mockData";
import { useEffect, useState } from "react";

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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const filteredData = filterJSONData(json);
    setRestaurantList(filteredData[0]?.data?.data?.cards);
    setFilteredRestaurantList(filteredData[0]?.data?.data?.cards);
    setAPICompleted(true);
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
            <RestCards
              key={restaurant.data.id}
              reslist={restaurant.data}
            ></RestCards>
          ))
        ) : apiCompleted ? (
          <h1>No Results found</h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Body;

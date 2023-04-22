import RestCards from "./RestCards";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

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

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantData);
  const [searchRestaurant, setSearchRestaurant] = useState("");
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
            restaurantData
          );
          setRestaurantList(searchedRestaurantList);
        }}
      ></input>
      <button
        className="top-restaurants"
        onClick={() => {
          const topRestaurantsList = topRestaurants(restaurantList);
          setRestaurantList(topRestaurantsList);
        }}
      >
        Show Top Restaurants
      </button>
      <button
        className="all-restaurants"
        onClick={() => {
          setRestaurantList(restaurantData);
        }}
      >
        Show All Restaurants
      </button>
      <div id="res-cards-container">
        {restaurantList?.length > 0 ? (
          restaurantList.map((restaurant) => (
            <RestCards
              key={restaurant.data.id}
              reslist={restaurant.data}
            ></RestCards>
          ))
        ) : (
          <h1>No Results found</h1>
        )}
      </div>
    </div>
  );
};

export default Body;

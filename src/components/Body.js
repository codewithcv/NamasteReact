import RestCards from "./RestCards";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

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
          const searchedRestaurant = restaurantData.filter((restuarant) => {
            return restuarant.data.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          setRestaurantList(searchedRestaurant);
        }}
      ></input>
      <button
        className="top-restaurants"
        onClick={() => {
          const filteredRestaurant = restaurantList.filter((restaurant) => {
            return restaurant.data.avgRating > 4.0;
          });
          setRestaurantList(filteredRestaurant);
        }}
      >
        Filter Top Restaurant
      </button>
      <button
        className="all-restaurants"
        onClick={() => {
          setRestaurantList(restaurantData);
        }}
      >
        All Restaurants
      </button>
      <div id="res-cards-container">
        {restaurantList.length > 0 ? (
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

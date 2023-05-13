import RestCards from "./RestCards";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useResCards from "../utils/useResCards";
import UserContext from "../utils/UserContext";

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
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const { restaurantList, apiCompleted } = useResCards();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

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
      <input
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      ></input>
      <input
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      ></input>
      <div id="res-cards-container">
        {filteredRestaurantList?.length > 0 ? (
          filteredRestaurantList.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
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

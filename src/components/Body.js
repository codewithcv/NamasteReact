import RestCards from "./RestCards";
import { restaurantData } from "../utils/mockData";

const Body = () => {
  return (
    <div id="body-container">
      <div id="search">Search Box</div>
      <div id="res-cards-container">
        {restaurantData.map((restaurant) => (
          <RestCards
            key={restaurant.data.id}
            reslist={restaurant.data}
          ></RestCards>
        ))}
      </div>
    </div>
  );
};

export default Body;

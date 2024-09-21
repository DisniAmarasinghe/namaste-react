import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //normal js variable
  // let listOfRes = [
  //   {
  //     data: {
  //       name: "POPEYES",
  //       description: "Popular for its modern twist on classic dishes.",
  //       cuisines: ["Mexican", "Tacos", "Burgers"],
  //       rating: 3.3,
  //       costForTwo: 35000,
  //       address: {
  //         street: "1010 Elm Street",
  //         city: "Colombo",
  //         province: "Western",
  //         zip: "00303",
  //       },
  //       imageId:
  //         "372bab3aadbf248b7bc7418d20b8e50c/50446f64f31cbefe66558fc47f50a9d6",
  //     },
  //   },
  //   {
  //     data: {
  //       name: "KFC",
  //       description: "Popular for its modern twist on classic dishes.",
  //       cuisines: ["Mexican", "Tacos", "Burgers"],
  //       rating: 4.3,
  //       costForTwo: 35000,
  //       address: {
  //         street: "1010 Elm Street",
  //         city: "Colombo",
  //         province: "Western",
  //         zip: "00304",
  //       },
  //       imageId:
  //         "372bab3aadbf248b7bc7418d20b8e50c/50446f64f31cbefe66558fc47f50a9d6",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.rating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.address.zip}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

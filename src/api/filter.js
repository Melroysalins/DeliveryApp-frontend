import { BaseUrl } from "../constants";

const filterRestaurantList = async ({ deliveryTime, offer, veg, Nonveg }) => {
  const data = {
    deliveryTime,
    offer,
    veg,
    Nonveg,
  };

  const result = await fetch(`${BaseUrl}/user/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result?.json();

  return response;
};

export { filterRestaurantList };

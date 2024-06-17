import { BaseUrl } from "../constants";

const getRestaurantListBasedonLocation = async ({ state_district }) => {
  const data = {
    state_district,
  };

  const response = await fetch(`${BaseUrl}/user/getrestaurantlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response?.json();

  return result;
};

export { getRestaurantListBasedonLocation };

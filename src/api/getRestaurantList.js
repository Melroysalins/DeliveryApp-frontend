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

const getRestaurantMenu = async ({ _id }) => {
  const response = await fetch(`${BaseUrl}/user/getmenulist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeID: _id }),
  });

  const result = await response.json();

  return result;
};

const searchInResultMenu = async ({ _id, searchvalue }) => {
  const data = {
    storeID: _id,
    name: searchvalue,
  };
  const response = await fetch(`${BaseUrl}/user/searchmenu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export {
  getRestaurantListBasedonLocation,
  getRestaurantMenu,
  searchInResultMenu,
};

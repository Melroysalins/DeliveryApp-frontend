import { BaseUrl } from "../constants";
const getSearchedProductName = async ({ searchvalue }) => {
  const result = await fetch(`${BaseUrl}/user/searchfoodorrestaurant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchvalue }),
  });

  const response = await result.json();

  return response;
};

const getSearchedProductandStoreName = async ({ searchvalue }) => {
  const result = await fetch(`${BaseUrl}/user/food`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchvalue }),
  });

  const response = await result.json();

  return response;
};

export { getSearchedProductName, getSearchedProductandStoreName };

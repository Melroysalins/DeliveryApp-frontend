import { BaseUrl } from "../constants";

const getSpecialOfferRestaurant = async () => {
  const result = await fetch(`${BaseUrl}/user/offerrestaurant`, {
    method: "GET",
  });

  const response = await result.json();

  return response;
};

export { getSpecialOfferRestaurant };

import { BaseUrl } from "../constants";

const addProductToCart = async ({ _id, storeID }) => {
  const userID = localStorage.getItem("userid");

  const data = {
    userID,
    storeID,
    _id,
  };

  const result = await fetch(`${BaseUrl}/user/addtocart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { addProductToCart };

import { BaseUrl } from "../constants";

const OrderSaveFunction = async ({ userID, storeID, products, totalprice }) => {
  const data = {
    userID,
    storeID,
    products,
    totalprice,
  };

  console.log("Frontend data--->", data);

  const result = await fetch(`${BaseUrl}/user/ordersave`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { OrderSaveFunction };

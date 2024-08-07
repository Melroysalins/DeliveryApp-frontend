import { BaseUrl } from "../constants";

const OrderSaveFunction = async () => {
  const userID = localStorage.getItem("userid");
  const data = {
    userID,
  };
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

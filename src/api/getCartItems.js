import { BaseUrl } from "../constants";

const getCartItems = async ({ userID }) => {
  const data = { userID };

  const result = await fetch(`${BaseUrl}/user/getcart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { getCartItems };

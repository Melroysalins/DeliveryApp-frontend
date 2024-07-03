import { BaseUrl } from "../constants";

const mergeCartItems = async ({ _id }) => {
  const userID = localStorage.getItem("userid");
  const data = {
    _id,
    userID,
  };

  const result = await fetch(`${BaseUrl}/user/mergecart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { mergeCartItems };

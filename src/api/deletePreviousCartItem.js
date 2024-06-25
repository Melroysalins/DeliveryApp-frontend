import { BaseUrl } from "../constants";

const deletePreviousCartItem = async ({ message }) => {
  const userID = localStorage.getItem("userid");

  const data = {
    message,
    userID,
  };

  const result = await fetch(`${BaseUrl}/user/removeExistingItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { deletePreviousCartItem };

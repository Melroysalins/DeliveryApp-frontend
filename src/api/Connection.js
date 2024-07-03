import { BaseUrl } from "../constants";
const EstablishConnection = async ({ storeID }) => {
  const userID = localStorage.getItem("userid");

  const data = {
    userID,
    storeID,
  };

  const result = await fetch(`${BaseUrl}/user/connect`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { EstablishConnection };

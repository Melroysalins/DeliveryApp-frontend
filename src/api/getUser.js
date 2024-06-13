import { BaseUrl } from "../constants";

const getUserDetails = async ({ _id }) => {
  const data = { _id };

  const result = await fetch(`${BaseUrl}/user/getUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { getUserDetails };

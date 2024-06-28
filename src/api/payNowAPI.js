import { BaseUrl } from "../constants";

const PayNowFunction = async ({ userID }) => {
  const data = { userID };

  const result = await fetch(`${BaseUrl}/user/paynow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { PayNowFunction };

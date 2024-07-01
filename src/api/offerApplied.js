import { BaseUrl } from "../constants";

const OfferApply = async ({ userID, applied, offer }) => {
  const data = {
    userID,
    applied,
    offer,
  };

  const result = await fetch(`${BaseUrl}/user/offer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await result.json();

  return response;
};

export { OfferApply };

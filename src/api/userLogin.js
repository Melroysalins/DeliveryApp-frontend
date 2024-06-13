import { BaseUrl } from "../constants";

export const UserLogin = async ({ email, phone }) => {
  const data = { email, phone };
  const result = await fetch(`${BaseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

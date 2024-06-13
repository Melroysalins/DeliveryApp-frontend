import { BaseUrl } from "../constants";

export const RegisterUser = async ({ email, username, phone }) => {
  const data = { username, email, phone };
  const result = await fetch(`${BaseUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const respoonse = await result.json();

  return respoonse;
};

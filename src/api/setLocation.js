import { BaseUrl } from "../constants";

const setUserLocation = async ({ village, state_district, state, _id }) => {
  const data = {
    village,
    state_district,
    state,
  };
  const body = {
    data,
    _id,
  };

  const result = await fetch(`${BaseUrl}/user/setaddress`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return result;
};

export { setUserLocation };

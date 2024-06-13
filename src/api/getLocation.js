const getUserCurrentLocation = async ({ latitude, longitude }) => {
  //   console.log("API Key--->", process.env.REACT_LOCATION_API_);

  const result = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=16c15b136ebd491b879d824bfbabede1&q=${latitude}+${longitude}&pretty=1&no_annotations=1`
  );

  const response = await result.json();

  return response;
};

export { getUserCurrentLocation };

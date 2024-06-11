import React, { useState } from "react";

const CategoryList = ({ data }) => {
  const [activepath, setActivePath] = useState("Home");
  return (
    <div className="CategoryList">
      <p className={activepath === data?.name ? "selected" : "NonSelected"}>
        {data?.name}
      </p>
    </div>
  );
};

export default CategoryList;

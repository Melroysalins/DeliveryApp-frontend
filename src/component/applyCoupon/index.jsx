import React from "react";
import "./index.css";

const ApplyCoupon = ({ data }) => {
  return (
    <div className="ApplyCouponeContainner">
      <div className="CouponBox">
        <p>Apply Coupon -{" " + data?.offer + " off"}</p>
      </div>
    </div>
  );
};

export default ApplyCoupon;

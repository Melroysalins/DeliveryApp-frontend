import React, { useEffect, useState } from "react";
import "./index.css";
import TrackOrderDisplay from "../../component/trackOrderDisplay";
import { OrderSaveFunction } from "../../api/orderSave";

const TrackOrders = () => {
  const [orderresult, setOrderResult] = useState();
  const FetchOrderDetails = async () => {
    const result = await OrderSaveFunction();
    if (result?.status === 200) {
      setOrderResult(result?.orderDetails);
    }
  };

  useEffect(() => {
    FetchOrderDetails();
  }, []);

  return (
    <div className="TrackOrdersContainner">
      <div className="TrackorderSection">
        {orderresult &&
          orderresult?.map((list) => (
            <TrackOrderDisplay key={list?._id} data={list} />
          ))}
      </div>
    </div>
  );
};

export default TrackOrders;

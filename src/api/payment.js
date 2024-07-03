import { BaseUrl } from "../constants";

const CheckOutPayment = async ({
  amount,
  username,
  email,
  phone,
  userID,
  storeID,
  products,
  totalprice,
  storeinfo,
  userInfo,
}) => {
  try {
    const data = {
      amount,
      userID,
      storeID,
      products,
      totalprice,
      storeinfo,
      userInfo,
    };

    console.log("Backend send data-->", data);

    // Fetch the Razorpay key
    const keyResponse = await fetch(`${BaseUrl}/user/getkey`, {
      method: "GET", // Changed to GET as it only fetches the key
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Key Response--->", keyResponse);

    if (!keyResponse.ok) {
      throw new Error(`Error fetching Razorpay key: ${keyResponse.statusText}`);
    }

    const keyData = await keyResponse.json();

    console.log("Razorpay Key--->", keyData);

    // Create a payment order
    const orderResponse = await fetch(`${BaseUrl}/user/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("order Response--->", orderResponse);

    if (!orderResponse.ok) {
      throw new Error(
        `Error creating payment order: ${orderResponse.statusText}`
      );
    }

    const orderData = await orderResponse.json();

    console.log("Payment Order--->", orderData);

    // Razorpay options
    const options = {
      key: keyData.key, // Enter the Key ID generated from the Dashboard
      amount: orderData.orders.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Melroy Salins",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderData.orders.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/api/user/paymentverification",
      prefill: {
        name: username,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();

    return orderData;
  } catch (error) {
    console.error("Error in CheckOutPayment:", error);
    throw error;
  }
};
export { CheckOutPayment };

export const EmailandPhoneValidation = (email, phone) => {
  let message = "";
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneregex = /^\d{10}$/;

  if (!emailregex.test(email)) {
    message = "email is not valid";
  } else if (!phoneregex.test(phone)) {
    message = "phone number is not valid";
  }
  return message;
};

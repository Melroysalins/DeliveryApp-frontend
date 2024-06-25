import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RegisterUser } from "../api/registerUser";
import { UserLogin } from "../api/userLogin";
import { EmailandPhoneValidation } from "../utils/validations";
import CustomizedSnackbars from "./snackBar";

export default function LoginForm({
  login,
  setIsDrawerOpen,
  setLoad,
  iscartPage,
}) {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const [isScreenSmall, setIsScreenSmall] = React.useState(
    window.innerWidth <= 400
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSaveUserDetails = (e) => {
    e.preventDefault();

    const result = EmailandPhoneValidation(email, phone);

    if (result.length) {
      setOpen(true);
      setMessage(result);
      setSeverity("error");
    } else {
      !login ? registerTheUser() : loginUser();
    }
  };

  const registerTheUser = async () => {
    const result = await RegisterUser({ email, username, phone });

    if (result?.status === 200) {
      const userAddress = {
        village: "Dendur",
        state_district: "Udupi District",
        state: "Karnataka",
      };
      setOpen(true);
      setMessage(result?.message);
      setSeverity("success");
      setTimeout(() => {
        !iscartPage && setIsDrawerOpen(false);
      }, 400);
      localStorage.setItem("userid", result?.userCreated?._id);
      localStorage.setItem("isloggin", true);
      localStorage.setItem("useraddress", JSON.stringify(userAddress));
      setLoad(true);
      window.location.reload();
    } else {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    }
  };

  const loginUser = async () => {
    const result = await UserLogin({ email, phone });

    if (result?.status === 200) {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("success");
      setTimeout(() => {
        !iscartPage && setIsDrawerOpen(false);
      }, 400);
      localStorage.setItem("userid", result?.user?._id);
      localStorage.setItem("isloggin", true);
      setLoad(true);
      window.location.reload();
    } else {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: !isScreenSmall ? "40ch" : "30ch",
          display: "flex",
          flexDirection: "column",
          marginTop: iscartPage ? "15px" : "",
        },
      }}
      noValidate
      autoComplete="off"
    >
      {!login && (
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      )}
      <TextField
        id="outlined-basic"
        label="phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          className="LoginButton"
          onClick={(e) => handleSaveUserDetails(e)}
        >
          {login ? "Login" : "Sign up"}
        </button>
      </Box>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </Box>
  );
}

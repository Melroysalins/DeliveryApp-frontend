import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearIcon from "@mui/icons-material/Clear";
import LoginRegisterMessage from "./loginregisterMessage";

export default function RightTemporaryDrawer({
  isOpen,
  toggleDrawer,
  setIsDrawerOpen,
  setLoad,
}) {
  const [isScreenSmall, setIsScreenSmall] = React.useState(
    window.innerWidth <= 450
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClearIconClick = () => {
    setIsDrawerOpen(false);
  };

  const preventCloseOnClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: !isScreenSmall ? 450 : "100%", padding: "10px" }}
        role="presentation"
        onClick={preventCloseOnClickInside}
        onKeyDown={preventCloseOnClickInside}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
            padding: "7px",
          }}
        >
          <ClearIcon
            sx={{ cursor: "pointer" }}
            onClick={handleClearIconClick}
          />
        </Box>
        <Box
          sx={{
            marginTop: "25px",
            display: "flex",
            padding: "10px",
            width: "100%",
          }}
        >
          <LoginRegisterMessage
            setIsDrawerOpen={setIsDrawerOpen}
            setLoad={setLoad}
          />
        </Box>
      </Box>
    </Drawer>
  );
}

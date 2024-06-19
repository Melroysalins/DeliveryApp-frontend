import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ name }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ fontSize: "11px", cursor: "pointer" }}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography
          color="text.primary"
          sx={{ fontSize: "11px", fontFamily: "Roboto" }}
        >
          {name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

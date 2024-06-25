import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

export default function ItemExistModal({ open, setOpen, setMessage }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontFamily: "Roboto", cursor: "pointer" }}
          >
            Items already in cart
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontFamily: "Roboto",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Your cart contains items from other restaurant. Would you like to
            reset your cart for adding items from this restaurant?
          </Typography>

          <div className="TwoButtonCOntainner">
            <button
              className="Nobtn"
              onClick={() => {
                setMessage(false);
                setOpen(false);
              }}
            >
              No
            </button>

            <button className="Yesbtn" onClick={() => setMessage(true)}>
              Yes, start afresh
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

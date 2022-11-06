import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
async function CircularIndeterminate() {
  <Box
    sx={{
      display: "flex",
      width: "100vw",
      alignSelf: "center",
      justifySelf: "center",
      alignContent: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress />
  </Box>;
}

const modalStyle = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function SuccessModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = async () => {
    setTimeout(() => setShowModal(true), 4000);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  let [showModal, setShowModal] = React.useState(false);

  return (
    <div className="button-container">
      <Button variant="outlined" type="submit" onClick={handleOpen}>
        Submit
      </Button>
      <div className="modal-container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
            sx={modalStyle}
          >
            {showModal ? (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  You have borrowed 87 MATIC! Due in 7d
                </Typography>
              </>
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface IModalViewProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: any;
  title: string;
  size?: string;
  saveFunc?: any;
  buttonName?: any;
}

const Modal: React.FC<IModalViewProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
  title,
  size = "lg",
  saveFunc,
  buttonName,

}) => {

  const [fullWidth,] = React.useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={size}
        open={isModalOpen}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <hr></hr>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" onClick={saveFunc}>{buttonName}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Modal;

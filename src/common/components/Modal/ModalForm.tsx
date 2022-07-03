import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface IModalFormProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: any;
  title: string;
  size?: any;
  saveFunc?: any;
  buttonName?: any;
  actionType?: any;
  path?: any;
  rowId?: any;
  buttons?: any;
  actionHander?: any;
  classes?: any;
  onBackdropClick?: any;
  headerButon?: any;
}

const ModalForm: React.FC<IModalFormProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
  title,
  size = "lg",
  // saveFunc,
  buttonName,
  actionType,
  path,
  rowId,
  buttons,
  actionHander,
  classes,
  onBackdropClick,
  headerButon,
}) => {

  // console.log(path, "path");
  let navigate = useNavigate();
  const [fullWidth, setFullWidth] = React.useState(true);
  const buttonRefs = useRef<any>([]);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = (evnt: any, reason: any) => {
    if (reason && reason === "backdropClick") {
      return;
    }
    setIsModalOpen(false);
  };

  let saveBtnClick = null;

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={size}
        open={isModalOpen}
        onClose={handleClose}
        classes={classes}
        // onBackdropClick={onBackdropClick ? () => { } : handleClose}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span> {title}</span>
          {headerButon ? <span>{headerButon}</span> : ""}
        </DialogTitle>
        <hr style={{ margin: "10px 0" }}></hr>
        <DialogContent sx={{ paddingTop: 0 }}>
          {children(buttonRefs)}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} type="button">Close</Button> */}
          {actionType === "edit" && (
            <Button
              type="button"
              onClick={() => {
                if (path) {
                  navigate(path, { state: { id: rowId, type: actionType } });
                } else {
                  actionHander();
                }
              }}
            >
              {buttonName}
            </Button>
          )}
          {/* {actionType === "save" && (
            <Button
              ref={modalSaveRef}
              type="button"
              onClick={(e) => {
                modalSaveRef?.current?.click();
              }}
            >
              {buttonName}
            </Button>
          )} */}
          {buttons?.length > 0 &&
            buttons?.map((item:any, index: number) => (
              <Button
                ref={(obj) => {
                  buttonRefs.current[index] = obj;
                }}
                type={item?.type}
                className={item?.classes}
                onClick={(e) => {
                  buttonRefs?.current[index]?.current?.click(e);
                }}
              >
                {item?.label}
              </Button>
            ))}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalForm
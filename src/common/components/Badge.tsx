import { Chip } from "@mui/material";
import React from "react";

interface IBadgeProps { 
  label: string;
  onClick?: () => void;
  [x: string]: any;
}

const BadgeComponent:React.FC<IBadgeProps> = ({ onClick, label , ...rest}) => {
  return (
    <Chip
      label={label}
      sx={{
        fontSize: "14px",
        lineHeight: "20px",
        color: "rgba(0, 0, 0, 0.87)",
        "& .MuiSvgIcon-root": {
          color: "rgba(0, 0, 0, 0.6)",
        },
      }}
      onDelete={onClick}
      {...rest}
    />
  );
};

export default BadgeComponent;

import { Button } from "@mui/material";
import React from "react";

type NavigationProps = {} & React.PropsWithChildren;

const buttonStyles = {
  color: "rgb(2,113,220)",
  borderRadius: 9999,
  marginBottom: 2,
};

const imageStyles: React.CSSProperties = {
  height: "48px",
  width: "auto",
};

const navigationContainerStyles: React.CSSProperties = {
  backgroundColor: "rgb(2,113,220)",
  height: "10vh",
  display: "flex",
  justifyContent: "space-around",
  paddingTop: 10,
};

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <div style={navigationContainerStyles}>
      <div style={{ display: "flex" }}>
        <Button sx={buttonStyles}>
          <img style={imageStyles} src="/logo.png" alt="logo" />
        </Button>
        <Button sx={buttonStyles}>
          <img style={imageStyles} src="/logo1.png" alt="logo1" />
        </Button>
        <Button sx={buttonStyles}>
          <img style={imageStyles} src="/logo2.png" alt="logo2" />
        </Button>
      </div>
      {children}
      <div style={{ display: "flex" }}>
        <Button sx={{ ...buttonStyles, paddingTop: 2 }}>
          <img style={imageStyles} src="/logo3.png" alt="logo4" />
        </Button>
        <Button sx={{ ...buttonStyles, paddingTop: 2 }}>
          <img style={imageStyles} src="/logo4.png" alt="logo4" />
        </Button>
        <Button sx={buttonStyles}>
          <img style={imageStyles} src="/logo5.png" alt="logo5" />
        </Button>
      </div>
    </div>
  );
};

export default Navigation;

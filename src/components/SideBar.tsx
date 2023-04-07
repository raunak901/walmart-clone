import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import React from "react";
import { styled } from "@mui/material";
import { DUMMY_SIDEBAR_ITEMS } from "../constants";
import { nanoid } from "@reduxjs/toolkit";

interface ISidebar extends React.PropsWithChildren {}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "#fff",
  padding: "1rem",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const Sidebar: React.FC<ISidebar> = (_props) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "90vh",
        width: "100%",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      {DUMMY_SIDEBAR_ITEMS.map(({ title }) => (
        <Accordion key={nanoid()}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontSize: "1.0rem",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Details for {title}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;

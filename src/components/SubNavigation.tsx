import React from "react";
import { DUMMY_SUB_NAVIGATION_LINKS } from "../constants";
import { v4 as uuidv4 } from "uuid";
import "./SubNavigation.css";

const SubNavigation: React.FC<{}> = (_props) => {
  const question = (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        margin: "0 2em",
      }}
    >
      <img
        loading="lazy"
        alt=" "
        src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
        width="26"
        height="26"
        aria-hidden="true"
        style={{ marginRight: "1em" }}
      />
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        How do you want your items?
      </div>
    </span>
  );

  const address = (
    <ul>
      {DUMMY_SUB_NAVIGATION_LINKS.map(({ title }) => (
        <li key={uuidv4()}>
          <a href="reload" style={{ fontSize: 13 }}>
            <strong>{title}</strong>
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="sub-navigation">
      <div>{question}</div>
      <div className="nav">{address}</div>
    </div>
  );
};

export default SubNavigation;

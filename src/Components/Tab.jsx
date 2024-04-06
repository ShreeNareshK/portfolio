import React, { useState } from "react";
import Tabbutton from "./Tabbutton";
import data from "./data";
import "./tab.css";
export default function Tab() {
  const [content, setContent] = useState();
  var tabContent = <p>Please Select a Value</p>;

  if (content) {
    tabContent = (
      <div className="content">
        <h2>{data[content].title}</h2>
        <p>{data[content].description}</p>
        <p>{data[content].code}</p>
      </div>
    );
  }

  function handleSelect(selectedValue) {
    setContent(selectedValue);
    console.log(selectedValue);
  }
  return (
    <div>
      <h1 className="header">Examples</h1>
      <menu className="contents">
        <Tabbutton
          isSelected={content === "Components"}
          onSelect={() => handleSelect("Components")}
        >
          Components
        </Tabbutton>
        <Tabbutton
          isSelected={content === "JSX"}
          onSelect={() => handleSelect("JSX")}
        >
          JSX
        </Tabbutton>
        <Tabbutton
          isSelected={content === "State Management"}
          onSelect={() => handleSelect("State Management")}
        >
          State Management
        </Tabbutton>
      </menu>
      {tabContent}
    </div>
  );
}

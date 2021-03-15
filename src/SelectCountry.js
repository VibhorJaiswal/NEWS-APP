import React from "react";
import { Dropdown } from "react-bootstrap";

function SelectCountry(props) {
  /*const countryName = {
    in: "India",
    cn: "china",
    ru: "Russia",
    us: "USA"
  };*/

  return (
    <div className="m-3">
      <Dropdown onSelect={props.handleSelect}>
        <Dropdown.Toggle
          style={{
            backgroundColor: "#ffab52",
            color: "black",
            fontFamily: "Cinzel, serif"
          }}
          id="dropdown-basic"
        >
          {props.data.selectedCountry}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            backgroundColor: "#ffe8c7",
            color: "black",
            fontFamily: "Cinzel, serif"
          }}
        >
          <Dropdown.Item eventKey="in">India</Dropdown.Item>
          <Dropdown.Item eventKey="cn">China</Dropdown.Item>
          <Dropdown.Item eventKey="ru">Russia</Dropdown.Item>
          <Dropdown.Item eventKey="us">USA</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SelectCountry;

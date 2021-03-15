import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchTopic(props) {
  return (
    <div className="m-3">
      <InputGroup className="mb-3" onChange={props.handleChange}>
        <FormControl
          placeholder="Search topic"
          aria-label="Search topic"
          aria-describedby="basic-addon2"
          style={{
            backgroundColor: "#ebdcc7",
            color: "black",
            fontFamily: "Cinzel, serif"
          }}
        />
        <InputGroup.Append onClick={props.handleClick}>
          <Button
            style={{
              backgroundColor: "#ffab52",
              color: "black",
              fontFamily: "Cinzel, serif"
            }}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchTopic;

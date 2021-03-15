import React from "react";
import { Card } from "react-bootstrap";

function NoNewsCard() {
  return (
    <div className="m-3">
      <Card bg={"danger"} text={"light"} className="mb-2">
        <Card.Header style={{ fontWeight: "bolder" }}>
          Sorry! No news for that at a moment :(
        </Card.Header>
        <Card.Body>
          <Card.Text>
            This happens when there is no news available for a related Topic,
            Country or in English language. Please try searching somthing
            different.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoNewsCard;

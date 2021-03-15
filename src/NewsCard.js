import React from "react";
import { Card } from "react-bootstrap";

function NewsCard(props) {
  // console.log(props);
  return (
    <div className="mx-3 my-3">
      <Card className="text-center">
        <Card.Header
          style={{ backgroundColor: "#d49d4c", fontFamily: "Cinzel, serif" }}
        >
          <span>Source - {props.data.source.name} </span>
          {/* <span style={{ float: "right" }}>At: {props.data.publishedAt}</span> */}
        </Card.Header>
        <Card.Body
          style={{ backgroundColor: "#facc8c", fontFamily: "Cinzel, serif" }}
        >
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
          <Card.Link href={props.data.url}>Read full...</Card.Link>
        </Card.Body>
        <div>
          <Card.Footer
            style={{ backgroundColor: "#d49d4c", fontFamily: "Cinzel, serif" }}
          >
            Author- {props.data.author}
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}

export default NewsCard;

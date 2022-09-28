import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import { Container, Col, Row } from "react-bootstrap";

// const baseURL = "https://players.free.beeceptor.com/api/list";
const baseURL = "/data.json";

function Cards() {
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPlayers(response.data);
    });
  }, []);

  if (!players) return "Loading";

  return (
    <div>
      <Container>
        <Row>
          {players.map((player) => {
            return (
              <Col xs="12" md="6" lg="4">
                <Card key={player.id} data={player} />;
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;

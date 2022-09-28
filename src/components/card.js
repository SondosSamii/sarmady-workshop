import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/card.scss";

function Card(props) {
  function getYear(date) {
    return new Date(date).getUTCFullYear();
  }

  function calcAge(dob) {
    return new Date().getUTCFullYear() - getYear(dob);
  }

  function calcPrice(careerData) {
    let price = 0;
    careerData.map((data) => {
      price += data.price;
    });
    return Math.round(price);
  }

  return (
    <div className="card">
      <div className="top">
        <Container className="content">
          <div className="img-circle">
            <Image
              fluid
              src={`https://semedia.filgoal.com/Photos/Person/medium/${props.player.id}.png`}
              alt="Player"
            />
            <span>{calcPrice(props.player.careerData)}M $</span>
          </div>
          <h2>{props.player.name}</h2>
          <div className="player-details">
            <img src="images/person.svg" alt="Person" />
            {calcAge(props.player.dateOfBirth)} عام
            <span>|</span>
            <img src="images/swap.svg" alt="swap" /> إنتقال
          </div>

          <Row className="justify-content-center align-items-end text-center clubs">
            <Col xs="auto">
              <img
                src={`https://semedia.filgoal.com/Photos/Team/Medium/${props.player.careerData[1].teamId}.png`}
                alt={props.player.careerData[1].teamName}
              />
              <h3>{props.player.careerData[1].teamName}</h3>
            </Col>
            <Col xs="auto">
              <img
                src="images/clubs-arrows.svg"
                alt="Arrows"
                className="arrows"
              />
              <span>{getYear(props.player.careerData[0].from)}</span>
            </Col>
            <Col xs="auto">
              <img
                src={`https://semedia.filgoal.com/Photos/Team/Medium/${props.player.careerData[0].teamId}.png`}
                alt={props.player.careerData[0].teamName}
              />
              <h3>{props.player.careerData[0].teamName}</h3>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="content">
        <Row className="align-items-center justify-content-around interactions">
          <Col xs="auto" className="comments">
            <img src="images/comment.svg" alt="Comments" />
            <span>27 تعليق</span>
          </Col>
          <Col xs="auto" className="likes">
            <span>-6</span>
            <img src="images/dislike.svg" alt="Dislikes" className="me-3" />
            <span>12</span>
            <img src="images/like.svg" alt="Likes" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;

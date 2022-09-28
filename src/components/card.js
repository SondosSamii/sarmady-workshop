import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/card.scss";

function Card(props) {
  function calcAge(date) {
    const birthDate = new Date(date),
      today = new Date();
    const age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    console.log(age);
    return age;
  }

  // calcAge("1992-02-04T00:00:00");

  return (
    <div className="card">
      <div className="top">
        <Container className="content">
          <div className="img-circle">
            <Image
              fluid
              src="https://semedia.filgoal.com/Photos/Person/medium/14490.png"
              alt="Player"
            />
            <span>80M $</span>
          </div>
          <h2>{props.data.name}</h2>
          <div className="player-details">
            <img src="images/person.svg" />
            {calcAge(props.data.dateOfBirth)}
            عام
            <span>|</span>
            <img src="images/swap.svg" alt="swap" /> إنتقال
          </div>

          <Row className="justify-content-center align-items-end text-center clubs">
            <Col xs="auto">
              <img src="images/club1.svg" alt="Club" />
              <h3>باريس سان جيرمان</h3>
            </Col>
            <Col xs="auto">
              <img
                src="images/clubs-arrows.svg"
                alt="Arrows"
                className="arrows"
              />
              <span>2023</span>
            </Col>
            <Col xs="auto">
              <img src="images/club2.svg" alt="Club" />
              <h3>ريال مدريد</h3>
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

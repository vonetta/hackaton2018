import React, { PureComponent } from "react"
import { Col, Row, Grid } from "react-bootstrap"

export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <div className="parallax">
          <div className="caption">
            <span className="border">Chime In</span>
          </div>
        </div>

        <Grid fluid id="noSpace">
          <Row>
            <Col
              className="flex-fill"
              md={6}
              xs={12}
              style={{
                border: "solid #A2A2A2 1px",
                backgroundColor: "#EFFFEA",
                paddingTop: "10%",
                paddingBottom: "10%"
              }}
            >
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
              <p>asdfasffdsfadf</p>
            </Col>
            <Col
              md={6}
              xs={12}
              style={{
                border: "solid #A2A2A2 1px",
                backgroundColor: "#F2E2FA",
                paddingTop: "10%",
                paddingBottom: "10%"
              }}
            >
              <Col md={6} xs={12} style={{ textAlign: "left" }}>
                <h1>Study Partner</h1>
                <hr id="break" />
                <p>
                  Speak Smart is your personal study partner. Whether it's your
                  own personal quizzes and tests, or ones you find on our public
                  domain, our Google Home application will vocally test you with
                  questions of your own choosing. Simply say "Hey Google, quiz
                  me on...", then state your subject! Good luck.
                </p>
              </Col>
            </Col>
            <Col
              md={6}
              xs={12}
              style={{
                border: "solid #A2A2A2 1px",
                backgroundColor: "#F2E2FA",
                paddingTop: "10%",
                paddingBottom: "10%"
              }}
            >
              <Col md={6} xs={12} style={{ textAlign: "left" }}>
                <h1>Study Partner</h1>
                <hr id="break" />
                <p>
                  Speak Smart is your personal study partner. Whether it's your
                  own personal quizzes and tests, or ones you find on our public
                  domain, our Google Home application will vocally test you with
                  questions of your own choosing. Simply say "Hey Google, quiz
                  me on...", then state your subject! Good luck.
                </p>
              </Col>
            </Col>
          </Row>
        </Grid>
        <div className="parallax" />
      </div>
    )
  }
}

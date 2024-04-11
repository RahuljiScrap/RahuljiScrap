import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroTwoSection.module.css";
import hamimg from "../../assets/Icon/hamburger.svg";
import deliveryimg from "../../assets/Icon/delivery-man.svg";
import topimg from "../../assets/Icon/top-food.svg";

const HeroTwoSection = () => {
  //Rendering the HeroTwo section
  return (
    <section id="why">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Why us</h2>
              <p>This is what makes our product different</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_cards}>
          <Col
            lg={4}
            className={classes.first_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div className={`${classes.card_one} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={hamimg} alt="Hanmburger"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Best price</h5>
                  <p>
                  We offer the most competitive prices for your scrap through our extensive network of recyclers.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={deliveryimg} alt="Delivery man"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Convenience</h5>
                  <p>
                  Doorstep pickup from your place , at a date and time that suits you the best.
                  </p>
                  <p className={classes.extra_cond}>
                   *Delivery charges extra applicable
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={deliveryimg} alt="Delivery man"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Trust</h5>
                  <p>
                  Trained and verified pickup technician, with smart weighing machine & toolkit.
                  </p>
                  <p className={classes.extra_cond}>
                   *Delivery charges extra applicable
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className={classes.last_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.card_three} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={topimg} alt="Thumbs up"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Eco friendly</h5>
                  <p>
                  We ensure the ethical disposal and recycling of your scrap materials.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroTwoSection;

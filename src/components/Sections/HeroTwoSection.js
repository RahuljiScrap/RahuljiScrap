import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroTwoSection.module.css";
import rupees from "../../assets/Icon/indian-rupee-sign-currency-money-india-93656223b777fab21330968b204d776c.png";
import deliveryimg from "../../assets/Icon/5bb9141352788-587de0a089dd3ee4affc7ac25876de70.png";
import streetviewimg from "../../assets/Icon/street-view-trusted-computer-software-photography-greenlight-recruitment-virtual-tour-business-54769d9cd845b031b2db29614e86d7ed.png";
import topimg from "../../assets/Icon/marmoleum-linoleum-environmentally-friendly-sheet-vinyl-flooring-cork-eco-city-9e3361f6fee89aac238d50e014921823.png";

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
                  <img src={rupees} alt="Hanmburger" style={{width: '70px', height: '70px'}}></img>
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
                  <img src={deliveryimg} alt="Delivery man" style={{ height: '70px', width: '80px'}}></img>
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
                  <img src={streetviewimg} alt="Street view" style={{ height: '80px', width:'80px'}}></img>
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
                  <img src={topimg} alt="Thumbs up" style={{ height: '70px', width: '70px'}}></img>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";

const HeroSixSection = () => {
  //Rendering the Testimonial Section
  return (
    <section id="testimonials">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our client are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Divyansh Goyal</h4>
              <p className={classes.text_location}>Greater Noida</p>
              <p className={classes.text_content}>
              Choosing Scrap Recycle was one of the best decisions we made for our construction business. Not only do they provide convenient scrap metal pickup services, but they also ensure that our materials are recycled responsibly. It's a win-win for us and the environment.
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Pulkit Aggarawal</h4>
              <p className={classes.text_location}>Indirapuram,Ghaziabad</p>
              <p className={classes.text_content}>
                {" "}
                Working with ScrapRecycle has been an absolute pleasure. Their professionalism, attention to detail, and dedication to delivering results have made them my go-to choice for service. I'm consistently impressed by their commitment to excellence.{" "}
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="450"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Gauri Shanker</h4>
              <p className={classes.text_location}>Noida sector 62</p>
              <p className={classes.text_content}>
              I'm extremely satisfied with the experience I had with ScrapRecycle. Their team was responsive, reliable, and went above and beyond to ensure that my needs were met. I'll definitely be returning for future [product/service] needs and recommending them to others.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //ENd
};

export default HeroSixSection;

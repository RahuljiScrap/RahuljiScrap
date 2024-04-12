import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
// import aboutImage from "../../assets/image/about-image.png";
import Modal from "../Ui/Modal";

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Rendering the About section and the About Modal
  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
                {/* We make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? ScrapRecycle makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go. We'll help you
                find unique meals wherever you are. With our app, you never have
                to settle for unhealthy, expensive takeaway food again. */}
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id="about">
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="700"
            >
              <div className={classes.text_div}>
                <h2 className={classes.text_header}>About us</h2>
                <p className={classes.text_content}>
                  At ScrapRecycle, we believe in making recycling convenient and rewarding for everyone. Our scrap pickup service allows individuals to schedule pickups from the comfort of their homes at their convenience. We are dedicated to ensuring a hassle-free experience for our customers. Whether you have a few items or a large collection of scrap materials, we're here to help. We pay fair prices for scrap materials, encouraging sustainable practices while providing an additional source of income for our customers. Through our efficient recycling process, we strive to reduce waste and promote environmental stewardship. Join us in our mission to create a cleaner, greener future for generations to come.
                </p>
                <div className={classes.button_div}>
                  <TheButton onClick={aboutModal}>See more</TheButton>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              {/* <div
                className={classes.image_div}
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="700"
              >
                <img
                  className={classes.image}
                  src={aboutImage}
                  alt="about"
                ></img>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  //END
};

export default HeroFourSection;

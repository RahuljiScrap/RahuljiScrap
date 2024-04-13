// HeroThreeSection.js

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
// import {Ac  } from "../../assets/image/air-conditioning-refrigeration-hvac-home-appliance-refrigerator-refrigerator-0ab633c8e63fb805d2040dc4577a41b7.png";

const HeroThreeSection = () => {
  // Data for appliances
  const largeAppliances = [
    { name: "Ac", price: "upto ₹4000/piece" },
    { name: "Washing machine", price: "₹1000/piece" },
    { name: "Fridge", price: "upto ₹1500/piece" }
  ];

  const smallAppliances = [
    { name: "Metal", price: "₹30/kg" },
    { name: "Plastic", price: "Variable" },
    { name: "Fan", price: "₹30/kg" }
  ];

  const otherAppliances = [
    { name: "Tv", price: "₹150/piece" },
    { name: "Bike", price: "₹2100/piece" },
    { name: "Car", price: "₹20000/piece" }
  ];

  // Function to render appliance cards
  const renderApplianceCards = (appliances) => {
    return appliances.map((appliance, index) => (
      <Col lg={4} key={index} className={`${classes.dish_col} mb-4`}>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
          className={classes.card}
        >
          <img src={`../../assets/image/${appliance.name}.png`} alt={appliance.name} />
          <div className={classes.card_body}>
            <p className={classes.card_text}>{appliance.price}</p>
          </div>
        </div>
        <h5 className={classes.card_title}>{appliance.name}</h5>
      </Col>
    ));
  };

  return (
    <section id="appliances">
      <Container>
        {/* Large Appliances */}
        <Row className={`${classes.row} mx-auto`} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Large Appliances</h2>
            </div>
          </Col>
        </Row>
        <Row>{renderApplianceCards(largeAppliances)}</Row>

        {/* Small Appliances */}
        <Row className={`${classes.row} mx-auto`} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Small Appliances</h2>
            </div>
          </Col>
        </Row>
        <Row>{renderApplianceCards(smallAppliances)}</Row>

        {/* Other Appliances */}
        <Row className={`${classes.row} mx-auto`} data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Other Appliances</h2>
            </div>
          </Col>
        </Row>
        <Row>{renderApplianceCards(otherAppliances)}</Row>
      </Container>
    </section>
  );
};

export default HeroThreeSection;

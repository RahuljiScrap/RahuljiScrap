import React from "react";
import classes from "./HeroSection.module.css";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Marquee from "react-fast-marquee";

const Marque = () => {
  //Rendering the Marque
  return (
        <Row className={`${classes.row} mx-auto`}>
     <Marquee gradientWidth={1200}  gradient={false} gradientColor={[0,0,0]}  className={`${classes.custom_marquee }`}>
      Get Exclusive Offers 🤑🤑 on monthly subscription. || Contacts us now on +91 87004 39434 😊😊 .
</Marquee>
        </Row>
  );
  //END
};

export default Marque;

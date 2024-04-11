import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/dish1.png";
import dish2 from "../../assets/image/dish2.png";
import dish3 from "../../assets/image/dish3.png";
import regularBreakfast from "../../assets/image/regularBreakfast.png";
import deluxeBreakfast from "../../assets/image/deluxeBreakfast.png";
import premiumBreakfast from "../../assets/image/premiumBreakfast.png";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";
import dalChawal from "../../assets/image/dalChawal.png";
import kadiChawal from "../../assets/image/kadiChawal.png";
import rajmaChawal from "../../assets/image/rajmaChawal.png";
import lobiaMasalaChawal from "../../assets/image/lobiaMasalaChawal.png";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: regularBreakfast,
    name: "Poha tasty",
    price: 99,
  },

  {
    id: "d2",
    src: deluxeBreakfast,
    name: "Bread Omlette and Poha",
    price: 129,
  },

  {
    id: "d3",
    src: premiumBreakfast,
    name: "Porridge beans and veggies",
    price: 169,
  },
];


const riceMeals = [
  {
    id: "d1",
    src: kadiChawal,
    name: "Kadi Chawal",
    price: 69,
  },

  {
    id: "d2",
    src: dalChawal,
    name: "Dal Rice",
    price: 69,
  },

  {
    id: "d3",
    src: rajmaChawal,
    name: "Rajma Rice",
    price: 69,
  },
  {
    id: "d3",
    src: lobiaMasalaChawal,
    name: "Lobhiya masala Rice",
    price: 69,
  }
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish1,
    name: "Regular Thali",
    price: 99,
  },

  {
    id: "d5",
    src: dish2,
    name: "Deluxe Thali",
    price: 129,
  },

  {
    id: "d6",
    src: dish3,
    name: "Premium Thali",
    price: 159,
  },
];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable

  const dishListRice = riceMeals.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Large Appliances</h2>
              <p></p>
            </div>
          </Col>
        </Row>
        {/* <Col xs={12}>
        <div className={classes.header_div}>
          <p></p>
          <p></p>
        
        <p></p>
        <p></p>
         </div>
         </Col> */}
        <Row>{dishListRice}</Row>
        <Col xs={12}>
        <div className={classes.header_div}>
          <p></p>
          <p></p>
        <h3>Our Lunch and Dinner menu</h3>
        <p></p>
        <p></p>
         </div>
         </Col>
        <Row>{dishList2}</Row>
        <Col xs={12}>
        <div className={classes.header_div}>
        <h3>Our Breakfast menu</h3>
        <p></p>
         </div>
         </Col>
        <Row className={classes.row_dish}>{dishList1}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;

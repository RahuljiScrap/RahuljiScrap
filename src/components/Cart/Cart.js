import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";
import CartContext from "../store/cartcontext";
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { TRACKING_ID } from '../../Analytics/config';


const Cart = (props) => {
    //Rendering the footer
    useEffect(() => {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
  // Using useContext hooks
  const cartCtx = useContext(CartContext);
  // ENDS

  //Converting Total amount to two decimal places

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  //ENDS

  //Checking if there is any cart item in the cart

  const hasItems = cartCtx.items.length > 0;

  //ENDS

  //Function is called when items are being added or removed from the cart

  const onAddHandler = (item) => {
    ReactGA.event({
      category: 'User',
      action: 'Add to Cart',
      label: 'item',
      value: totalAmount // Optional numeric value
    });
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //ENDS

  //Revceiving values via props and mapping it using useContext

  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

  const combinedString = cartCtx.items.reduce((accumulator, item) => {
    const itemTotal = item.amount * item.price;
    return accumulator + item.name + ' (' + item.amount + ') = ' + itemTotal + "\n";
  }, '');
  
  const totalPayableAmount = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount * item.price;
  }, 0);
  

  
  
  


  // Rendering the Cart using the modal component

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>{cartItems}</div>

        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.buttons}>
        <p className={classes.extra_cond}>
                   *Delivery charges extra applicable
          </p>
          <TheButton
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </TheButton>
          {/* Hiding the order button if there is no item in the cart using the hasitems variable as a condition */}
          {hasItems && (
            <TheButton className={classes.btn_style3} onClick={() => props.onOrder(combinedString + "Total Payable amount ₹" + totalPayableAmount)}>
              Send Order
            </TheButton>
          )}
          {/* ENDS */}
        </div>
      </div>
    </Modal>
  );
};

// ENDS

export default Cart;

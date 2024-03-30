import React, { useEffect,useState } from "react";
import TheNav from "./components/Header/TheNav";
import Sections from "./components/Sections/Sections";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import TheFooter from "./components/Footer/TheFooter";
import Swal from "sweetalert2";
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { TRACKING_ID } from '../src/Analytics/config';


const uniqueUserId = uuidv4();


// Initialize react-ga
ReactGA.initialize(TRACKING_ID);
// Enable debug mode (optional)
ReactGA.set({ debug: true });



const App = () => {
  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  useEffect(() => {
    // Increment user count
    ReactGA.set({ dimension1: 'user_id', value: uniqueUserId });
    ReactGA.pageview(window.location.pathname);
    console.log("User count set")
    // Send pageview
    ReactGA.pageview(window.location.pathname);
   

   postData();
  }, []);

  
  const postData = async () => {
    try {
       const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
    const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      const url = 'https://script.google.com/macros/s/AKfycbwa993uHE5GvkKkmGvLhUTJFZb8q4RnSwScLwRzvyVwrayGeBtuD0U94HwqkuAXf9vNew/exec?action=userVisited'; // Replace with your API endpoint
      const dataObject = { date: dateString,userVisited: 1 }; // Replace with your data object

      const requestOptions = {
        redirect: "follow",
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
          // Add any other required headers here
        },
        body: JSON.stringify(dataObject),
      };

      const response = await fetch(url, requestOptions);
console.log(response)
      // Handle the response data as needed
    } catch (err) {
    }
  };

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };
  // const sendMessage = () => {
    
  //   const accountSid = 'AC5163237d7e648e95d2f8266593da8a5d';
  //   const authToken = '76e8809febf8917a2c73bc911539f7dc';
  //   const message = 'Your order has been confirmed!';
  
  //   const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages`;
  
  //   const data = new FormData();
  //   data.append('To', '+919716218820'); // Replace with the recipient's phone number
  //   data.append('From', '+13613217946'); // Replace with your Twilio phone number
  //   data.append('Body', message);
  
  //   axios.post(twilioUrl, data, {
  //     auth: {
  //       username: accountSid,
  //       password: authToken,
  //     },
  //   })
  //   .then(response => {
  //     console.log('Message sent successfully');
  //   })
  //   .catch(error => {
  //     console.error('Error sending message:', error);
  //   });
  // };

  const openWhatsApp = (arg) => {
    const phoneNumber = '+918700439434'; // Replace with the desired phone number
    const customText = `Hi, Thanks for Ordering with us. Order Details: \n ${arg}`; // Replace with your custom text

    const encodedText = encodeURIComponent(customText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    console.log(whatsappUrl)
    window.open(whatsappUrl, '_blank');
}
  
  
  // const sendWhatsAppMessage = () => {
  //   const accountSid = 'AC5163237d7e648e95d2f8266593da8a5d';
  //   const authToken = '76e8809febf8917a2c73bc911539f7dc';
  //   const message = 'Hello from Twilio!'; // The message content
  
  //   axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
  //     Body: message,
  //     From: 'whatsapp:+14155238886', // Replace with your Twilio WhatsApp number
  //     To: 'whatsapp:+919716218820' // Replace with the recipient's WhatsApp number
  //   }, {
  //     auth: {
  //       username: accountSid,
  //       password: authToken
  //     }
  //   })
  //   .then(response => {
  //     console.log('WhatsApp message sent successfully:', response.data);
  //   })
  //   .catch(error => {
  //     console.error('Failed to send WhatsApp message:', error);
  //   });
  // }

  
  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };
  //END



  //EVent to occur on Order
  const onOrderHandler = (arg) => {
    setCartIsShown(false);
    console.log("Order successfull")
    openWhatsApp(arg)
    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });

  };

  //END

  //Rendering the cart and all the sections
  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={(arg) => onOrderHandler(arg)} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
    </CartProvider>
  );
  //END
};

export default App;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

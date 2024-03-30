import Footer from "./Footer";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { TRACKING_ID } from '../../Analytics/config';

// Use TRACKING_ID in your component



const TheFooter = () => {
  //Rendering the footer
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <footer>
      <Footer />
    </footer>
  );
  //END
};

export default TheFooter;

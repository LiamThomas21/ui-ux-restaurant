import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We are not just a restaurant; we are a hub of culinary passion, where every meal is an invitation to savor the simple joys of life.</p>
        <button type="button" className="custom__button">Find out More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In the heart of our bustling city, a humble dream was born - a dream to create a culinary sanctuary that celebrates the rich tapestry of flavors woven into our community's cultural fabric. </p>
        <button type="button" className="custom__button">Find out More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
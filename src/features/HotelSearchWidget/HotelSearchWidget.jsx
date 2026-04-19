import React from 'react';
import './HotelSearchWidget.css';

const HotelSearchWidget = () => {
  return (
    <div className="widgetSection appendBottom40">
      <a className="myraBanner" href="https://www.makemytrip.com/myra/" target="_blank" rel="noopener noreferrer">
        <div className="myraBannerInner">
          <img className="myraBannerArt" src="https://go-assets.ibcdn.com/u/MMT/images/1771220008796-mmt-ai-banner.png" alt="Myra.AI" />
          <div className="myraBannerCopy">
            <span className="myraBannerDesc">Your AI Assistant for Flights & Stays</span>
          </div>
        </div>
      </a>
      <div className="makeFlex primaryTraveler">
        <div className="hsw hswFullWidth">
          <div className="hsw_inner">
            <div className="hsw_inputBox">
              <label className="lbl_input">City, Property name or Location</label>
              <input className="hsw_inputField" type="text" defaultValue="Goa" />
            </div>
            <div className="hsw_inputBox">
              <label className="lbl_input">Check-In</label>
              <input className="hsw_inputField" type="text" defaultValue="20 Apr 26" />
            </div>
          </div>
          <button className="primaryBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchWidget;
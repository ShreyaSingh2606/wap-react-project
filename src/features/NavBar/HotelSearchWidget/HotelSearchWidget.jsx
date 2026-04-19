import React from 'react';
import './HotelSearchWidget.css';

const HotelSearchWidget = () => {
  return (
    <div className="widgetSection">
      {/* AI Banner Section */}
      <a className="myraBanner" href="https://www.makemytrip.com/myra/" target="_blank" rel="noopener noreferrer">
        <div className="myraBannerInner">
          <div className="myraBannerCopy">
            <div className="myraBannerLeft">
              <img 
                className="myraBannerLogo" 
                alt="Myra" 
                width="140" 
                height="28" 
                loading="lazy" 
                src="https://go-assets.ibcdn.com/u/MMT/images/1774520808406-try-myra-beta.png" 
              />
            </div>
            <span className="myraBannerDesc">Your AI Assistant for Flights &amp; Stays</span>
            <span className="myraBannerArrow" aria-hidden="true">→</span>
          </div>
        </div>
      </a>

      {/* Input Grid */}
      <div className="hsw_inner">
        <div className="hsw_inputBox">
          <label className="lbl_input">CITY, PROPERTY NAME OR LOCATION</label>
          <input className="hsw_inputField" type="text" defaultValue="Goa" />
          <span className="hsw_subLabel">India</span>
        </div>

        <div className="hsw_inputBox">
          <label className="lbl_input">CHECK-IN</label>
          <div className="hsw_dateContainer">
            <span className="hsw_dateBig">20</span>
            <span className="hsw_dateSmall">Apr'26</span>
          </div>
          <span className="hsw_subLabel">Monday</span>
        </div>
      </div>

      <button className="primaryBtn">Search</button>
    </div>
  );
};

export default HotelSearchWidget;
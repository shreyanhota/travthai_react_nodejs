import React from 'react';
import { motion } from 'framer-motion';

function AIPage() {
  return (
     <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About TravAI</h1>
      <p>This is the about page with a smo21212oth animation.</p>
    </motion.div> 
	
	/*
	<section id='home' className='home'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted type="video/mp4"></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
        <span  className="smallText">
          Our Packages
        </span>
        <h1 data-aos="fade-down" className="homeTitle">
          Search your Holiday
        </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            <GrLocation className="icon"/>
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
            <input type="date" />
           
            </div>
          </div>


          <div className="priceInput">
            <div className="label_total flex">
            <label htmlFor="city">Max price:</label>
            <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
           <HiFilter className="icon"/>
           <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
         <div className="rightIcons">
          <FiFacebook className="icon"/>
          <AiOutlineInstagram className="icon"/>
          <SiTripadvisor className="icon"/>
         </div>
         <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
         </div>
        </div>
      </div>
    </section>
  )*/
  )}

export default AIPage

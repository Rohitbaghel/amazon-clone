import React from 'react';
import {HomeProducts} from './HomeProducts';
import uniqid from 'uniqid';
import {Navbar} from './Navbar';

const Home = () => {
    return <>
        <Navbar/>
        <div style={{backgroundColor:'#EBEDEC'}}>
            <img src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg" alt="container-img" className='w-full -z-1 -mb-40' style={{maskImage: 'linear-gredient(to bottom,rgb(0,0,0,1),rgba(0,0,0,0))'}} />
            <div className='grid grid-cols-2 gap-4 '>
                <HomeProducts id={uniqid()} title='Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned' price={2350} image='https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg' rating={5} />
                

                <HomeProducts id={uniqid()} title='Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon' price={2350} image='https://m.media-amazon.com/images/I/71IywmQMCTL._AC_UL320_.jpg' rating={4}/>
            </div>
            <div className='grid grid-cols-3 gap-4 my-8'>
                <HomeProducts id={uniqid()} title='Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI®...' price={3550} image='https://m.media-amazon.com/images/I/71E4InwfcPL._AC_UL320_.jpg' rating={3} />
                
                <HomeProducts id={uniqid()} title='18CM Stainless Steel Dog Bowl with Rubber Base for Small Medium Large Dogs Pets Feeder Bowl and Water Bowl 1pc Pet Supplies Comfortable...' price={981} image='https://m.media-amazon.com/images/I/51L0K4MPDOL._AC_UL320_.jpg' rating={3} />


                <HomeProducts id={uniqid()} title='Garmin fenix 6S, Premium Multisport GPS Watch, Smaller-Sized, Heat and Altitude Adjusted V02 Max, Pulse Ox Sensors and Training Load Focus, Silver with Black Band...' price={34050} image='https://m.media-amazon.com/images/I/61FltNta1+L._AC_UY218_.jpg' rating={5} />
              
            </div>
            <HomeProducts id={uniqid()} title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for...' price={15050} image='https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL320_.jpg' rating={5} />
            
        </div>
    </>;
};

export default Home;

import React from 'react';

function Awards() {
    return ( 
        <div className='conatiner mt-5'>
            <div className='row'> 
                    <div className='col-6 p-5'>
                        <img src='media/largestBroker.svg'/>
                    </div>
                    <div className='col-6 p-5 mt-5'>
                        <h1>Largest Stock Broker in India</h1>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'> 
                            <li>
                                <p>Futures and Options</p>
                            </li>
                             <li>
                                <p>Commodity derivatives</p>
                            </li>
                             <li>
                                <p>Currency derivatives</p>
                            </li>
                            </div>
                         <div className='col-6'> <li>
                                <p>Stocks & IPO's</p>
                            </li>
                             <li>
                                <p>Direct mutual funds</p>
                            </li>
                             <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                            </div>
                    </div>
                        <img src='media/pressLogos.png' style={{width:"90%"}}/>
                    </div>

            </div>
        </div>
     );
}

export default Awards;
import React from 'react';
import './Welcome.css'
const Welcome = () => {
    const date=new Date().toLocaleTimeString()
    const dates=new Date()
    const p=dates.getHours()
    console.log(p)

    let time='close';
    if(p>=10 && p<20)
    {
        time='open'
    }
    return (
        <div className='text-center'>
            <div className='bg-dark text-light'>
            <h5>Welcome To Buisness tally</h5>
            <p>OPENING TIME:10.00AM</p>
            <p>CLOSING TIME:8.00PM</p>
            <p>NOW IT IS :{date}</p>
            <p>{time}</p>
            </div>
            
           <img src="https://www.builderfly.com/wp-content/uploads/2019/10/Things-to-consider-offline-to-online-min.jpg" alt=""/> 
        </div>
    );
};

export default Welcome;
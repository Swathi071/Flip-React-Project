import React from "react";
import im2 from './im2.png';
import box1 from './box1.webp';
import box2 from './box2.webp';
import box3 from './box3.webp';
export default function Bank(){
    return(
        <>
        <div className="col-md-12 slider">
            <img src={im2}/>
        </div>
        <div className='row'>
                <div className='col-md-4'>
                    <img className='b' src={box1}/>
                </div>
                <div className='col-md-4'>
                    <img className='b' src={box2}/>
                </div>
                <div className='col-md-4'>
                    <img className='b' src={box3}/>
                </div>
        </div>
        
        </>
    )
}
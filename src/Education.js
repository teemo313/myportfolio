import React, {useState} from 'react';
import './Education.scss'
import surfesch from "./img/eschool1.jpg" ;
import surfmsch from "./img/mschool1.jpeg" ;
import surfhsch from "./img/hschool1.jpg" ;
import surfuni from "./img/univ1.jpg" ;

const Education = () => {
  
 
    return(
        <div className='edubg' 
            style={{
                justifyItems:'center', 
                alignItems:'center',
                height: window.innerHeight,
            }}>
            <div></div>
            <div className='div3' > 
                <p>냉정초등학교</p>
                <p>1999.03~2005.02</p>
            </div>
            <div>
                <img className='eduphoto' src={surfmsch} alt='시흥중학교'/>
            </div>
            <div className='div3'>
                <p>정왕고등학교</p>
                <p>2008.03~2011.02</p>
            </div>
            <div>
                <img className='eduphoto' src={surfuni} alt='순천향대학교'/>
            </div>
            <div></div>
            <div></div>
            <div>
                <img className='eduphoto' src={surfesch} alt='냉정초등학교'/>
            </div>
            <div className='div3'>
                <p>시흥중학교</p>
                <p>2005.03~2008.02</p>

            </div>
            <div>
                <img className='eduphoto' src={surfhsch} alt='정왕고등학교'/> 
                </div>
            <div className='div3'>
                <p>순천향대학교</p>
                <p>20011.03~2017.02</p>
            </div>
        </div>

    )
}

export default Education ;
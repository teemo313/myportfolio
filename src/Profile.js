import React from 'react';
import './Profile.scss' ;
import surfprofile from "./img/myprofile.png" ;
import myskills2 from './img/skills2.png';
import './App.css';

// import { BsStarFill, BsImages } from "react-icons/bs"
// import Leeyoondong from './img/Leeyoondong.jpg';

const Profile = () => {

    return(
        <div className="profilebg" style={{alignItems:'center', height: window.innerHeight}}>
            <div></div>
            <div><h1 className='titlefont'>Profile</h1></div>
            <div></div>
            <div className='bgcolor'></div>
            <div className='proinnergrid'>
                <div>
                    <div>
                    </div>
                    <img className='photo' src={surfprofile} alt='증명사진'/>
                </div>
                <div>
                    <p className='profilep1'>이 름 : 이윤동</p>
                    <p className='profilep1'>MBTI : E.N.F.J</p>
                    <p className='profilep1'>생 일 : 1992-07-04</p>
                    <p className='profilep1'>번 호 : 010-2309-3781</p>
                    <p className='profilep1'>취 미 : 사진 촬영</p>
                </div>
                <div>
                    <div>
                        <img className='skillsdiv' src={myskills2} alt='스킬' />
                    </div>
                </div>
            </div>
            <div className='bgcolor'></div>
        </div>

    )
}

export default Profile ;
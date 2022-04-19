import React from 'react';
import './Career.scss'
import {FaHouzz, FaSchool} from "react-icons/fa";
import { MdVolunteerActivism, MdSchool } from "react-icons/md"
import { GiPistolGun } from "react-icons/gi"
// import { BsImages } from "react-icons/bs"



import './App.css';



const Career = () => {

    return(
        <div className='carbg'
             style={{
                justifyItems:'center', 
                alignItems:'center',
                height: window.innerHeight,}}>
            <div></div>
            <div>
                <h1 className='titlefont'>TimeLine</h1>
            </div>
            <div></div><div></div>
            <div className='innergrid' style={{
                // justifyItems:'center', 
                alignItems:'center',
            }}>
                <div></div>
                <div>
                    <p className='careerp'>2011.03.02</p>
                </div>
                <div className='careerdiv'>
                    <FaSchool size='25px' color='black' />
                </div>
                <div>
                    <p className='careerp2'>순천향대학교</p>
                    <p className='careerp3'>전기공학과 입학</p>
                </div>
                <div></div>
                <div></div>
                <div><p className='careerp'>2011.08.29<br />~ 2013.05.28</p></div>
                <div className='careerdiv'>
                    <GiPistolGun size='25px' color='black' />
                </div>
                <div>
                    <p className='careerp2'>군 입대</p>
                    <p className='careerp3'>육군 만기 전역</p>
                </div>
                <div></div>
                <div></div>
                <div><p className='careerp'>2016.06.27<br />~ 2016.07.10</p></div>
                <div className='careerdiv'>
                    <MdVolunteerActivism size='25px' color='black'/>
                </div>
                <div>
                    <p className='careerp2'>몽골 해외봉사단</p>
                    <p className='careerp3'>셀렝게 아이막 수흐바타르 지역 교육 봉사</p>
                </div>
                <div></div>
                <div></div>
                <div><p className='careerp'>2016.12.28<br />~ 2017.01.10</p></div>
                <div className='careerdiv'>
                    <MdVolunteerActivism size='25px' color='black' />
                </div>
                <div>
                    <p className='careerp2'>베트남 해외봉사단</p>
                    <p className='careerp3'>껀터시 지역 교육 봉사</p>
                </div>
                <div></div>
                <div></div>
                <div><p className='careerp'>2017.02.15</p></div>
                <div className='careerdiv'>
                    <MdSchool size='25px' color='black' />
                </div>
                <div>
                    <p className='careerp2'>순천향대학교</p>
                    <p className='careerp3'>전기공학과 학사 졸업</p>
                </div>
                <div></div>
                <div></div>
                <div><p className='careerp'>2017.03.08<br />~ 2020.03.10</p></div>
                <div className='careerdiv'>
                    <FaHouzz size='25px' color='black'/>
                </div>
                <div>
                    <p className='careerp2'>주식회사 디에이피</p>
                    <p className='careerp3'>기술연구소 사원</p>
                </div>
            </div>
          
        </div>

    )
}

export default Career ;
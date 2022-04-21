import React from 'react';
import './Career.scss'
import timelineimg from './img/timeline.PNG';
import './App.scss';


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
            <div style={{
                // justifyItems:'center', 
                alignItems:'center',
            }}>
                <div><img className="timediv" src={timelineimg} alt="타임라인" /></div>
            </div>
        </div>

    )
}

export default Career ;
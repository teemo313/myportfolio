import React from "react";
import './Photograph.scss' ;
import './App.css';
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';

const Photograph = () =>{
    return (
        <div className='photobg' style={{alignItems:'center', height: window.innerHeight}}>
            <div></div>
            <div><h1 className="titlefont">Photograph</h1></div>
            <div></div>
            <div></div>
            <div className='photoinnergrid'>
                <div className="photoinnergrid1">
                    <div></div>
                    <div>
                        <img className="photostyle" src={photo2} alt='고양이' />
                    </div>
                </div>
                <div className="photoinnergrid2">
                    <div></div>
                    <div></div>
                </div>
                <div className="photoinnergrid3">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}


export default Photograph;
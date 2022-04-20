import './App.scss';
import {useRef} from 'react';

import Profile from './Profile';
// import Education from './Education';
import Career from './Career';
// import Volunteer from './Volunteer';
import Myproject from './Myproject';
import Photograph from './Photograph';
import Footer from './Footer';

import mypenguin from './img/penguin.png';


function App() {

 
  const scrollMove1 = () => {window.scrollTo({top: ref1.current.offsetTop, left:0, behavior:"smooth"});};
  const scrollMove2 = () => {window.scrollTo({top: ref2.current.offsetTop, left:0, behavior:"smooth"});};
  // const scrollMove3 = () => {window.scrollTo({top: ref3.current.offsetTop, left:0, behavior:"smooth"});};
  const scrollMove4 = () => {window.scrollTo({top: ref4.current.offsetTop, left:0, behavior:"smooth"});};
  // const scrollMove5 = () => {window.scrollTo({top: ref5.current.offsetTop, left:0, behavior:"smooth"});};
  const scrollMove6 = () => {window.scrollTo({top: ref6.current.offsetTop, left:0, behavior:"smooth"});};
  const scrollMove7 = () => {window.scrollTo({top: ref7.current.offsetTop, left:0, behavior:"smooth"});};

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const ref3 = useRef(null);
  const ref4 = useRef(null);
  // const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  return (
    <div className='appbg' style={{height:window.innerHeight}}>
          <div className='appbu'>
            <button className='bustyle'onClick={scrollMove1}>Home</button><br />
            <button className='bustyle' onClick={scrollMove2}>Profile</button><br />
            {/* <button className='bustyle' onClick={scrollMove3}>Education</button><br /> */}
            <button className='bustyle' onClick={scrollMove4}>TimeLine</button><br />
            {/* <button className='bustyle' onClick={scrollMove5}>Volunteer</button><br /> */}
            <button className='bustyle' onClick={scrollMove6}>Project</button><br />
            <button className='bustyle' onClick={scrollMove7}>Photograph</button>
          </div>
      <div className='homediv' ref={ref1} style={{height:window.innerHeight, alignItems:'center',justifyItems:'center'}}>
          <div></div>
          <div><h1 className='titlefont'>Home</h1></div>
          <div></div>
          <div></div>
          <div><img src={mypenguin} alt='펭귄' style={{width:'800px', marginTop:'5rem', marginLeft:'7rem'}}/></div>
          <div></div>
         
      </div>
      <div ref={ref2} style={{height:window.innerHeight}}>
        <Profile />
      </div>
      {/* <div ref={ref3} style={{height:window.innerHeight}}>
        <Education />
      </div> */}
      <div ref={ref4} style={{height:window.innerHeight}}>
        <Career />
      </div>
      {/* <div ref={ref5} style={{height:window.innerHeight}}>
        <Volunteer />
      </div> */}
      <div ref={ref6} style={{height:window.innerHeight}}>
        <Myproject />
      </div>
      <div ref={ref7} style={{height:window.innerHeight}}>
        <Photograph />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

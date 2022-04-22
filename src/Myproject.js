import React, {useState }from "react";
import './Myproject.scss';
import './App.css';
import penguin12 from './img/penguin.png';
import ProjectModal1 from "./ProjectModal1";
import ProjectModal2 from "./ProjectModal2";
import ProjectModal3 from "./ProjectModal3";
import ProjectModal4 from "./ProjectModal4";

const Myproject = () => {

    const [project1Open, setProject1Open] = useState(false);
    const [project2Open, setProject2Open] = useState(false);
    const [project3Open, setProject3Open] = useState(false);
    const [project4Open, setProject4Open] = useState(false);
   
    const openProject1Modal = e =>{
        setProject1Open(true);}
    const closeProject1Modal = () =>{
        setProject1Open(false);}
    const openProject2Modal = e =>{
        setProject2Open(true);}
    const closeProject2Modal = () =>{
        setProject2Open(false);}
    const openProject3Modal = e =>{
        setProject3Open(true);}
    const closeProject3Modal = () =>{
        setProject3Open(false);}
    const openProject4Modal = e =>{
        setProject4Open(true);}
    const closeProject4Modal = () =>{
        setProject4Open(false);}
    return(
            
        
        <div className="projectbg" style={{alignItems:'center', height: window.innerHeight}}>
            <div></div>
            <div><h1 className="titlefont">Project</h1></div>
            <div></div>
            <div></div>
            <div className='jectinnergrid' style={{alignItems:'center', justifyItems:'center'}}>
                <div>
                    <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="1"className="project1img" onClick={openProject1Modal} src={penguin12} alt="펭귄" />
                </div>
                <div>
                    <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="2"className="project1img" onClick={openProject2Modal} src={penguin12} alt="펭귄" />
                </div>
                <div>
                    <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="3" className="project1img" onClick={openProject3Modal} src={penguin12} alt="펭귄" />
                </div>
                <div>
                    <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="4" className="project1img" onClick={openProject4Modal} src={penguin12} alt="펭귄" />
                </div>
            </div>
            <div>
                <ProjectModal1 open={project1Open} close={closeProject1Modal} header="1번 열림">
                    <div className="modalgrid1">
                        <p>1번 열림</p>
                    </div>
                </ProjectModal1>
                <ProjectModal2 open={project2Open} close={closeProject2Modal} header="2번 열림">
                    <div className="modalgrid2">
                        <p>2번 열림</p>
                    </div>
                </ProjectModal2>
                <ProjectModal3 open={project3Open} close={closeProject3Modal} header="3번 열림">
                    <div className="modalgrid3">
                        <p>3번 열림</p>
                    </div>
                </ProjectModal3>
                <ProjectModal4 open={project4Open} close={closeProject4Modal} header="4번 열림">
                    <div className="modalgrid4">
                        <p>4번 열림</p>
                    </div>
                </ProjectModal4>
            </div>
            <div></div>
        </div>
    )
}

export default Myproject;
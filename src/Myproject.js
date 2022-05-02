import React, {useState }from "react";
import './Myproject.scss';
import './App.css';

import photoproject1 from './img/project1.PNG';
import ProjectModal1 from "./ProjectModal1";
import ProjectModal2 from "./ProjectModal2";
import ProjectModal3 from "./ProjectModal3";
import ProjectModal4 from "./ProjectModal4";
import movie from "./img/movie.png";
import port from "./img/port.png";

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
                    {/* <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="1"className="project1img" onClick={openProject1Modal} src={photoproject1} alt="포트폴리오" /> */}
                </div>
                <div>
                    <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="2"className="project1img" onClick={openProject2Modal} src={port} alt="포트폴리오" />
                </div>
                <div>
                    <div><h1 style={{textAlign:'center'}}>The Movie DB</h1></div>
                    <img id="3" className="project1img" onClick={openProject3Modal} src={movie} alt="더무비" />
                </div>
                <div>
                    {/* <div><h1 style={{textAlign:'center'}}>Portfolio</h1></div>
                    <img id="4" className="project1img" onClick={openProject4Modal} src={photoproject1} alt="펭귄" /> */}
                </div>
                <div></div><div></div><div></div>
            </div>
            <div>
                {/* <ProjectModal1 open={project1Open} close={closeProject1Modal} header="1번 열림">
                    <div className="modalgrid1">
                        <p>1번 열림</p>
                    </div>
                </ProjectModal1> */}
                <ProjectModal2 open={project2Open} close={closeProject2Modal} header="Portfolio 웹 사이트 구축 및 배포">
                    <div className="modalgrid2">
                        <h1 className="modalh1">프로젝트 소개</h1>
                        <h3 className="modalh3">React 라이브러리를 활용한 웹 포트폴리오 사이트 구축 및 Netlify를 활용한 배포</h3><hr />
                        <h1 className="modalh1">활동 개요</h1>
                        <h3 className="modalh3">진행기간 : 2022년 04월 10일 ~ 2022년 04월 25일</h3>
                        <h3 className="modalh3">참여인원 : 1명</h3>
                        <h3 className="modalh3">개발환경 : Window 10, NodeJS, React</h3>
                        <h3 className="modalh3">사용언어 : HTML, SCSS, JavaScript</h3>
                        <h3 className="modalh3">개발도구 : Visual Studio Code, Figma</h3><hr />
                        <h1 className="modalh1">수행 활동 내역</h1>
                        <h3 className="modalh3">Figma Tool을 이용한 프로젝트 프로토 타입 설계</h3>
                        <h3 className="modalh3">SCSS를 활용한 컴포넌트 내 스타일링</h3>
                        <h3 className="modalh3">Hooks를 활용한 함수형 컴포넌트 구현</h3>
                        <h3 className="modalh3">Netlify를 이용한 웹 프로젝트 배포</h3>
                    </div>
                </ProjectModal2>
                <ProjectModal3 open={project3Open} close={closeProject3Modal} header="The Movie Application 구축">
                    <div className="modalgrid3">
                        <h1 className="modalh1">프로젝트 소개</h1>
                        <h3 className="modalh3">React Framework인 Next.js를 활용한 영화 소개 웹 사이트 구축</h3><hr />
                        <h1 className="modalh1">활동 개요</h1>
                        <h3 className="modalh3">진행기간 : 2022년 04월 26일 ~ 2022년 04월 29일</h3>
                        <h3 className="modalh3">참여인원 : 1명</h3>
                        <h3 className="modalh3">개발환경 : Window 10, NodeJS, React, Next.js</h3>
                        <h3 className="modalh3">사용언어 : HTML, CSS, JavaScript</h3>
                        <h3 className="modalh3">개발도구 : Visual Studio Code, Figma</h3><hr />
                        <h1 className="modalh1">수행 활동 내역</h1>
                        <h3 className="modalh3">Figma Tool을 이용한 프로젝트 프로토 타입 설계</h3>
                        <h3 className="modalh3">Next.js의 useRouter Hook을 활용한 동적 라우팅</h3>
                        <h3 className="modalh3">API Key를 이용한 Movie Data 받기, rewrites를 활용하여 API Key 숨기기</h3>
                        <h3 className="modalh3">Module.css, style JSX, style JSX global을 활용한 페이지 스타일링</h3>
                    </div>
                </ProjectModal3>
                {/* <ProjectModal4 open={project4Open} close={closeProject4Modal} header="4번 열림">
                    <div className="modalgrid4">
                        <p>4번 열림</p>
                    </div>
                </ProjectModal4> */}
            </div>
            <div></div>
        </div>
    )
}

export default Myproject;
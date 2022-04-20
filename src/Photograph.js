import React, {useState} from "react";
import './Photograph.scss' ;
import './App.css';
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';
import photo3 from './img/photo3.jpg';
import photo4 from './img/photo4.jpg';
import photo5 from './img/photo5.jpg';
import photo6 from './img/photo6.jpg';
import photo7 from './img/photo7.jpg';
import photo8 from './img/photo8.jpg';
import photo9 from './img/photo9.jpg';
import photo10 from './img/photo10.jpg';
import photo11 from './img/photo11.jpg';
import photo12 from './img/photo12.jpg';
import photo13 from './img/photo13.jpg';
import photo14 from './img/photo14.jpg';
import photo15 from './img/photo15.jpg';
import photo16 from './img/photo16.jpg';
import photo17 from './img/photo17.jpg';
import photo18 from './img/photo18.jpg';
import photo19 from './img/photo19.jpg';
import photo20 from './img/photo20.jpg';
import Modal from './Modal';

const Photograph = () =>{

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () =>{
        setModalOpen(true);
    }

    const closeModal = () =>{
        setModalOpen(false);
    }
    
  
    return (
        <div className='photobg' style={{alignItems:'center', height: window.innerHeight}}>
            <div>
                <Modal open={modalOpen} close={closeModal} header="크게 보기">
                    {<img className="modalstyle" src={photo1} alt='크게 보기' />}
                </Modal>
            </div>
            <div><h1 className="titlefont">Photograph</h1></div>
            <div></div>
            <div></div>
            <div className='photoinnergrid' style={{justifyContent:'center'}}>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo1} alt='세부' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo2} alt='고양이' />
                </div>              
                <div>
                    <img onClick={openModal} className="photostyle" src={photo3} alt='베트남 해외봉사' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo4} alt='몽골' />
                </div>        
                <div>
                    <img onClick={openModal} className="photostyle" src={photo5} alt='다낭' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo6} alt='일본 시내' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo7} alt='전망대' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo8} alt='오사카 시내' />
                </div>              
                <div>
                    <img onClick={openModal} className="photostyle" src={photo9} alt='후쿠오카' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo10} alt='등불' />
                </div>        
                <div>
                    <img onClick={openModal} className="photostyle" src={photo11} alt='오사카 개' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo12} alt='꽃과 달팽이' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo13} alt='전등' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo14} alt='제주도 해녀의집' />
                </div>              
                <div>
                    <img onClick={openModal} className="photostyle" src={photo15} alt='독립기념관' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo16} alt='나무' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo17} alt='물 거울' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo18} alt='동생' />
                </div>
                <div>
                    <img onClick={openModal} className="photostyle" src={photo19} alt='캄보디아 호수' />
                </div>              
                <div>
                    <img onClick={openModal} className="photostyle" src={photo20} alt='다리' />
                </div>                          
            </div>
        </div>
    )
}


export default Photograph;

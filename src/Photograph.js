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
    const [photoInfo, setPhotoInfo] = useState([]);
   
    const openModal = e =>{
        const arry = {
            id : e.target.id,
            src : e.target.src,
            alt : e.target.alt
        }
        setModalOpen(true);
        console.log(e.target.id);
        setPhotoInfo(arry);
    }

    const closeModal = () =>{
        setModalOpen(false);
    }

  
    return (
        <div className='photobg' style={{alignItems:'center', height: window.innerHeight}}>
            <div>
                <Modal open={modalOpen} close={closeModal} header="크게 보기" >
                    <img className="modalstyle" src={photoInfo.src} alt='크게 보기' />
                    {/* {photo === 1 && <img className="modalstyle" src={photo1} alt='크게 보기' />}
                    {photo === 2 && <img className="modalstyle" src={photo2} alt='크게 보기' />}
                    {photo === 3 && <img className="modalstyle" src={photo3} alt='크게 보기' />}
                    {photo === 4 && <img className="modalstyle" src={photo4} alt='크게 보기' />}
                    {photo === 5 && <img className="modalstyle" src={photo5} alt='크게 보기' />}
                    {photo === 6 && <img className="modalstyle" src={photo6} alt='크게 보기' />}
                    {photo === 7 && <img className="modalstyle" src={photo7} alt='크게 보기' />}
                    {photo === 8 && <img className="modalstyle" src={photo8} alt='크게 보기' />}
                    {photo === 9 && <img className="modalstyle" src={photo9} alt='크게 보기' />}
                    {photo === 10 && <img className="modalstyle" src={photo10} alt='크게 보기' />}
                    {photo === 11 && <img className="modalstyle" src={photo11} alt='크게 보기' />}
                    {photo === 12 && <img className="modalstyle" src={photo12} alt='크게 보기' />}
                    {photo === 13 && <img className="modalstyle" src={photo13} alt='크게 보기' />}
                    {photo === 14 && <img className="modalstyle" src={photo14} alt='크게 보기' />}
                    {photo === 15 && <img className="modalstyle" src={photo15} alt='크게 보기' />}
                    {photo === 16 && <img className="modalstyle" src={photo16} alt='크게 보기' />}
                    {photo === 17 && <img className="modalstyle" src={photo17} alt='크게 보기' />}
                    {photo === 18 && <img className="modalstyle" src={photo18} alt='크게 보기' />}
                    {photo === 19 && <img className="modalstyle" src={photo19} alt='크게 보기' />}
                    {photo === 20 && <img className="modalstyle" src={photo20} alt='크게 보기' />} */}
                </Modal>
            </div>
            <div><h1 className="titlefont">Photograph</h1></div>
            <div></div>
            <div></div>
            <div className='photoinnergrid' style={{justifyContent:'center'}}>
                <div>
                    <img id='1' onClick={openModal} className="photostyle" src={photo1} alt='세부' />
                </div>
                <div>
                    <img id='2' onClick={openModal} className="photostyle" src={photo2} alt='고양이' />
                </div>
                <div>
                    <img id='3' onClick={openModal} className="photostyle" src={photo3} alt='베트남 해외봉사' />
                </div>
                <div>
                    <img id='4' onClick={openModal} className="photostyle" src={photo4} alt='몽골' />
                </div> 
                <div>
                    <img id='5' onClick={openModal} className="photostyle" src={photo5} alt='다낭' />
                </div>
                <div>
                    <img id='6' onClick={openModal} className="photostyle" src={photo6} alt='일본 시내' />
                </div>
                <div>
                    <img id='7' onClick={openModal} className="photostyle" src={photo7} alt='전망대' />
                </div>
                <div>
                    <img id='8' onClick={openModal} className="photostyle" src={photo8} alt='오사카 시내' />
                </div>              
                <div>
                    <img id='9' onClick={openModal} className="photostyle" src={photo9} alt='후쿠오카' />
                </div>
                <div>
                    <img id='10' onClick={openModal} className="photostyle" src={photo10} alt='등불' />
                </div>        
                <div>
                    <img id='11' onClick={openModal} className="photostyle" src={photo11} alt='오사카 개' />
                </div>
                <div>
                    <img id='12' onClick={openModal} className="photostyle" src={photo12} alt='꽃과 달팽이' />
                </div>
                <div>
                    <img id='13' onClick={openModal} className="photostyle" src={photo13} alt='전등' />
                </div>
                <div>
                    <img id='14' onClick={openModal} className="photostyle" src={photo14} alt='제주도 해녀의집' />
                </div>              
                <div>
                    <img id='15' onClick={openModal} className="photostyle" src={photo15} alt='독립기념관' />
                </div>
                <div>
                    <img id='16' onClick={openModal} className="photostyle" src={photo16} alt='나무' />
                </div>
                <div>
                    <img id='17' onClick={openModal} className="photostyle" src={photo17} alt='물 거울' />
                </div>
                <div>
                    <img id='18' onClick={openModal} className="photostyle" src={photo18} alt='동생' />
                </div>
                <div>
                    <img id='19' onClick={openModal} className="photostyle" src={photo19} alt='캄보디아 호수' />
                </div>              
                <div>
                    <img id='20' onClick={openModal} className="photostyle" src={photo20} alt='다리' />
                </div>                          
            </div>
        </div>
    )
}


export default Photograph;

import React from 'react';
import './Modal.scss';


const ProjectModal1 = (props) => {

  const { open, close, header} = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header style={{textAlign:'center'}}>
            {header}
          </header>
          <main>{props.children}</main>
          <footer>  
            <button className="close" onClick={close}>Close</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ProjectModal1;
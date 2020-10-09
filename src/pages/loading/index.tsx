import React from 'react';
import Logo from '../../assets/logo.svg';
import loading from '../../assets/landing.svg';
import studyicons from '../../assets/icons/study.svg';
import give from '../../assets/icons/give-classes.svg';
import purple from '../../assets/icons/purple-heart.svg'
import {Link} from 'react-router-dom';
import './styles.css';
function Loading(){
    return(
       <div id='page-loading'>
           <div id='page-loading-content' className='conteiner'>
               <div className='logo-conteiner'>
                 <img  src={Logo}  alt='Proffy'/>
                 <h1>Sua plataforma de estudos </h1>
               </div>
               <img src={loading} alt='hero' className='hero-image'/>
            <div className='buttons-conteiner'>
          <Link to='study' className='study'>
              <img  src={studyicons} alt='Estudar'/>
              Estudar
          </Link>
          
          <Link to='give-form' className='give-classes'>
              <img  src={give} alt='da-aula'/>
              Dar Aula
          </Link>
           </div>
           <span className="total-connecti">
               Total de 200 conection <img alt='heard'src={purple}/>
           </span>
           </div>
       </div>
    );
}
export default Loading
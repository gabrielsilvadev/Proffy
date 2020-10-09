import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import Logo from '../../assets/logo.svg';


interface PageHeaderProp {
   title:string; 
}

const Pageheader:React.FC<PageHeaderProp> = (props) => {
return(
    <header className="page-header">
     <div className="top-bar-conteiner">
         <Link  to='/'> 
          <img src={backIcon} alt='voltar'/>
         </Link>
         <img src={Logo} alt='logo'/>
     </div>
    <div className="header-content">
        <strong>{props.title}</strong>
    </div>
    {props.children}
    </header>
);
}
export default Pageheader;
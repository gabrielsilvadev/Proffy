import React from 'react'
import Pageheader from '../../component/pageHeader/index'
import './styles.css';
function Teacher(){
    return (
     <div id='page-teacher-list' className='conteiner'>
        <Pageheader  title="Estes sao os professores disponiveis">
        <form  id="search-text-teacher">
       
        <div className="input-block">
            <label htmlFor="subject" >Materia</label>
           <input type="text" id='subject'/>
        
         </div>
         <div className="input-block">
            <label htmlFor="weeks-day">Dia da semana </label>
           <input type="text" id='weeks-day'/>
        
        </div>

         <div className="input-block">
            <label htmlFor="time" >Hora</label>
           <input type="text" id='tikme'/>
        
         </div>


         </form>
        
        </Pageheader>
    </div>
    )

}
export default Teacher
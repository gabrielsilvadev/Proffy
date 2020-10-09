import React from 'react';
import  {BrowserRouter,Route} from 'react-router-dom';
import Loading from './pages/loading';
import TeacherForm from './pages/teacher/teacherForm';
import Teacher from './pages/teacher/teacherlist';


function Routes(){
    return(
        <BrowserRouter>
        <Route  path='/' exact component={Loading}/>
        <Route  path='/study' component={Teacher}/>
        <Route  path='/give-form' component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;
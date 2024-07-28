import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/home'
import Gallery from './pages/Gallery/gallery'
import Classes from './pages/Classes/classes'
import Contact from './pages/Contact/contact'
import About from './pages/About/about'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/admin';
import ClassPopup from './component/classpopup/classpopup';
import EditClass from './component/editclass/editclass';
import AdminLogin from './pages/Admin/AdminLogin/adminlogin';
import { Navigate, useParams } from 'react-router-dom';

export default function App() {

  const ToHome = () => {
    return <Navigate replace to='/home'/>
  }

  const ClassesInfoWindow = ({classid}) => {
    return <ClassPopup classid={classid}></ClassPopup>
  }

  const ClassesPage = () => {
    const params = useParams();
    return <>
    <Classes/>
    {params.classid ? <ClassesInfoWindow classid={params.classid}></ClassesInfoWindow> : <></>} 
    </>
  }

  const ClassEditWindow = ({classid}) => {
    return <EditClass classid={classid}></EditClass>
  }

  const AdminPage = ({ token }) => {
    const params = useParams();

    return <>
      <Admin adminToken={token}/>
      {params.classid ? <ClassEditWindow classid={params.classid}/> : <></>}
    </>
  }

  const AdminLoginToken = () => {
    const params = useParams()
    console.log('test')
    console.log(params.token)
    return <> 
      <AdminPage token={params.token}/>
    </>
  }

  return (
    <BrowserRouter>
     <Routes> 
     <Route path='/' element={<ToHome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/classes' element={<ClassesPage/>}>
        <Route path=':classid' element={<ClassesInfoWindow/>}/>
      </Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<AdminPage/>}>
        <Route path=':classid' element={<ClassEditWindow/>}></Route>
      </Route>
      <Route path='/adminlogin' element={<AdminLogin/>}>
        <Route path=':token' element={<AdminLoginToken/>}></Route>
      </Route>
     </Routes> 
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

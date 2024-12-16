import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Taskparent from './Taskparent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Map from './Map';
import Todomap from './Todomap';
import Apitask from './Apitask';
import Landingpage from './Landingpage';
import Togglebtn from './Togglebtn';
import Startup from './Startup';
import Formone from './Formone';
import Userlogin from './Userlogin';
import Keyfile from './Keyfile';
import Userregistration from './Userregistration';
import WeatherAPI from './WeatherAPI';
import Movieapi from './Movieapi';
import Movieapi2 from './Movieapi2.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/about' element={<Map/>}></Route>
    <Route path='/Task' element={<Taskparent/>}></Route>
    <Route path='/todo' element={<Todomap/>}></Route>
    <Route path='/toggle' element={<Togglebtn/>}></Route>
    <Route path='/apitask' element={<Apitask/>}></Route>
    <Route path='/landing' element={<Landingpage/>}></Route>
    <Route path='/estartup' element={<Startup/>}></Route>
    <Route path='/formone' element={<Formone/>}></Route>
    <Route path='/userlogin' element={<Userlogin/>}></Route>
    <Route path='/keyfile' element={<Keyfile/>}></Route>
    <Route path='/userregistration' element={<Userregistration/>}></Route>
    <Route path='/Weatherapi' element={<WeatherAPI/>}></Route>
    <Route path='/Movieapi' element={<Movieapi/>}></Route>
    <Route path='/movieapi2/:imdbID' element={<Movieapi2/>}></Route>
   </Routes></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

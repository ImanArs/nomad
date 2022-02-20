import {Routes, Route, Link} from 'react-router-dom'


import './App.css';

import Layout from './components/Layout';
import Main_page from './components/Main_page/Main_page';
import Photos from './components/Photos/Photos'
import Director from './components/Director/Director'
import TourPage from './components/Tours/TourPage';
import Guids from './components/Guids/Guids'
import Tours from './components/Tours/Tours'



function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main_page/>} />
        <Route path='/Photos' element={<Photos />} />
        <Route path='/Director' element={<Director/>} />
        <Route path='/Tours' element={<Tours/>} />
        <Route path='/Tours/:id' element={<TourPage/>} />
        <Route path='/Guids' element={<Guids/>} />
        
      </Routes>
      <div className="App">
      
      </div>
      </Layout>

);


  
}

export default App;

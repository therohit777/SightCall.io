import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './component/LandingPage/landing.component';
import Home from './component/HomePage/home.component';
import Createroom from './component/CreateRoom/createroom.component';
import Videocall from './component/VideoCall/videocall.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/joinroom' element={<Landing/>}/>
        <Route path='/createroom' element={<Createroom/>}/>
        <Route path='/videocall' element={<Videocall/>}/>
      </Routes>
    </div>
  );
}

export default App;

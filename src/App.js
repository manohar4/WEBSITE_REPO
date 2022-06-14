
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Home from './pages/Home';
import Works from './pages/Works';
import OtherActivities from './pages/OtherActivities';
import Writings from './pages/Writings.js';
import ProjectDetails from './pages/ProjectDetials.js';

function App() {
  console.log(Home);
  return (
   
    <div className="App">
      <Router>
      <Helmet>
      <style>{"body { background-color: #050505 }"}</style>
    </Helmet>

        <Navbar></Navbar>
        <Routes>
        <Route exact path='/' element={<Home />}/>
          <Route path='/Works' element={<Works />}/>
          <Route path='/Writings' element={<Writings />}/>
          <Route path='/OtherActivities' element={<OtherActivities />}/>
          <Route path='/ProjectDetails/:id' element={<ProjectDetails />}/>

        </Routes>
      </Router>
     
    </div>
    
  );
}

export default App;

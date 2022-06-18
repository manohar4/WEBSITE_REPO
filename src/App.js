
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Home from './pages/Home';
import Works from './pages/Works';
import OtherActivities from './pages/OtherActivities';
import Writings from './pages/Writings.js';
import ProjectDetails from './pages/ProjectDetails.js';
import Airtable from 'airtable';
import { FetchProjectsList } from './helper/Context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const[projectsListData,setProjectsListData] = useState([]);

    var projects,tagArray; var projectsList=[];
    var base = new Airtable({apiKey: 'keybsrdTHoDUuYEPf'}).base('app6Go1Ou8TXBXOW8');
    
    const getRecords = async () =>{
      const records = await base('Projects List').select({maxRecords: 100,sort:[{field: "project_Id"}]}).firstPage();
  
      console.log(records);
  
      projects = await records.reduce( function (r, a) {
          r[a.fields.projectGroupName] = r[a.fields.projectGroupName] || [];
          tagArray = a.fields.Project_Tags.split(",");
          a.fields.Project_Tags = tagArray;
          r[a.fields.projectGroupName].push(a.fields);
          return r;
      }, {});
      for(let key in projects) {
                  var obj = {"projectGroupName":key,"projectsDetails":projects[key]}
                  projectsList.push(obj);
          }
          setProjectsListData(projectsList);
    }

    useEffect(()=>{
        getRecords();
    })


  return (
  <FetchProjectsList.Provider value={{projectsListData,setProjectsListData}}>
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
    </FetchProjectsList.Provider>
  );
}

export default App;

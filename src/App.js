
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
import { FetchProjectsList,FetchProjectsDetails,FetchWritingList } from './helper/Context';
import { useState,useEffect } from 'react';
function App() {

    const[projectsListData,setProjectsListData] = useState([]);
    const[projectsDetailsData,setProjectsDetailsData] = useState([]);
    const[writingsListData,setWritingsListData] = useState([]);



    var projects,tagArray; 
    var base = new Airtable({apiKey: 'keybsrdTHoDUuYEPf'}).base('app6Go1Ou8TXBXOW8');
    
    const getRecords = async () =>{
      const records = await base('Projects List').select({maxRecords: 100,sort:[{field: "project_Id"}]}).firstPage();  
      projects = await records.reduce( function (r, a) {
          r[a.fields.projectGroupName] = r[a.fields.projectGroupName] || [];
          tagArray = a.fields.Project_Tags.split(",");
          a.fields.Project_Tags = tagArray;
          r[a.fields.projectGroupName].push(a.fields);
          return r;
      }, {});
      var projectsList=[];
      for(let key in projects) {
                  var obj = {"projectGroupName":key,"projectsDetails":projects[key]}
                  projectsList.push(obj);
          }
          setProjectsListData(projectsList);
    }

    const getProjectsDetailsRecords = async () =>{
      const records = await base('Project Details').select({maxRecords: 100,sort:[{field: "project_Id"}]}).firstPage(); 
      for(var i=0;i<=records.length-1;i++){

        const dataUrl = records[i].fields.jsonAttachement[0].url;
        const ProjectDetailsFromJson = await fetch(dataUrl)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;  
        }) 
        .catch((error) => {
          console.error(error);
        });
        
        records[i].fields.ProjectDetails = ProjectDetailsFromJson;
      }
      setProjectsDetailsData(records);
    }

    const getWritingRecords = async () =>{
      const records = await base('Writing List').select({maxRecords: 100,sort:[{field: "writing_ID"}]}).firstPage();  
      setWritingsListData(records);
    }

    useEffect(()=>{
        getRecords();
        getProjectsDetailsRecords();
        getWritingRecords();
    },
    // eslint-disable-next-line
    [])


  return (
  <FetchProjectsList.Provider value={{projectsListData,setProjectsListData}}>
  <FetchProjectsDetails.Provider value={{projectsDetailsData,setProjectsDetailsData}}>
  <FetchWritingList.Provider value={{writingsListData,setWritingsListData}}>
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
    </FetchWritingList.Provider>
    </FetchProjectsDetails.Provider>
    </FetchProjectsList.Provider>
  );
}

export default App;

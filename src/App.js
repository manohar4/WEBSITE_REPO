
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Home from './pages/Home';
import Works from './pages/Works';
import OtherActivities from './pages/OtherActivities';
import Writings from './pages/Writings.js';
import ProjectDetails from './pages/ProjectDetails.js';
import WritingDetails from './pages/WritingDetails.js';
import PageNotFound from './pages/PageNotFound.js';
import DesignLibrary from './pages/DesignLibrary.js'
import Airtable from 'airtable';
import { FetchProjectsList,FetchProjectsDetails,FetchWritingList,FetchWritingDetails,FetchDesignLibrary} from './helper/Context';
import { useState,useEffect } from 'react';
import Plyr from 'plyr';



function App() {

    const[projectsListData,setProjectsListData] = useState([]);
    const[projectsDetailsData,setProjectsDetailsData] = useState([]);
    const[writingsListData,setWritingsListData] = useState([]);
    const[writingDetailsData,setWritingDetailsData] = useState([]);
    const[designLibraryData,setDesignLibraryData] = useState([]);


      // eslint-disable-next-line
    const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));



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

    const getWritingDetailsRecords = async () =>{
      const records = await base('Writing Details').select({maxRecords: 100,sort:[{field: "writing_ID"}]}).firstPage(); 
     
      for(var i=0;i<=records.length-1;i++){

        const dataUrl = records[i].fields.jsonAttachement[0].url;
        const WritingDetailsFromJson = await fetch(dataUrl)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;  
        }) 
        .catch((error) => {
          console.error(error);
        });
       
        records[i].fields.WritingDetails = WritingDetailsFromJson;
      }
      setWritingDetailsData(records);
    }

    const getDesignLibrary = async()=>{

      const records = await base('DesignLibraryData').select({maxRecords: 100}).firstPage();

          const groupBy = (array, key) => {


          var reduced = array.reduce((result, currentValue) => {
            (result[currentValue.fields[key]] = result[currentValue.fields[key]] || []).push(
              currentValue.fields
            );

            return result;

          }, {});
          return reduced
        };


   
        const groupedObj = groupBy(records,"Category");

        let sortable = [];
for (var item in groupedObj) {
    sortable.push({"catergory":item,"order": item.split(". ")[0] ,"Items":groupedObj[item]});
}


  

        var designLibraryDataArray = sortable.sort((a, b) =>  a.order-b.order);
        setDesignLibraryData(designLibraryDataArray);      
    }


    useEffect(()=>{
        getRecords();
        getProjectsDetailsRecords();
        getWritingRecords();
        getWritingDetailsRecords();
        getDesignLibrary();
    },
    // eslint-disable-next-line
    [])


  return (
  <FetchProjectsList.Provider value={{projectsListData,setProjectsListData}}>
  <FetchProjectsDetails.Provider value={{projectsDetailsData,setProjectsDetailsData}}>
  <FetchWritingList.Provider value={{writingsListData,setWritingsListData}}>
    <FetchWritingDetails.Provider value={{writingDetailsData,setWritingDetailsData}}>
      <FetchDesignLibrary.Provider value={{designLibraryData,setDesignLibraryData}}>
    <div className="App">
      <Router>
      <Helmet>
        <title> Manohar Manu | UX UI</title>
        <meta name="description" content="Hey, I'm Manohar. I'm a User Experience designer based out in Bangalore, India"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name='keywords' content='UX Designer,UX UI Designer, Visual Deisgner, product Designer, User Expereince Designer, India, Bangalore, Experienced, Portifolio, Best Website, Interaction designer, Manohar Manu, Manohar, ManoharManu' />

      <style>{"body { background-color: #000000 }"}</style>
    </Helmet>

        <Navbar></Navbar>
        <Routes>
        <Route exact path='/' element={<Home />}/>
          <Route path='/Works' element={<Works />}/>
          <Route path='/Writings' element={<Writings />}/>
          <Route path='/OtherActivities' element={<OtherActivities />}/>
          <Route path='/ProjectDetails/:id' element={<ProjectDetails />}/>
          <Route path='/WritingDetails/:id' element={<WritingDetails />}/>
          <Route path='/DesignLibrary' element={<DesignLibrary />}/>
          
          <Route path="*" element={<PageNotFound />} />
         
        </Routes>
      </Router>
    </div>
    </FetchDesignLibrary.Provider>
    </FetchWritingDetails.Provider>
    </FetchWritingList.Provider>
    </FetchProjectsDetails.Provider>
    </FetchProjectsList.Provider>
  );
}

export default App;

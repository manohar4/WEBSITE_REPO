
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
import { FetchProjectsList,FetchProjectsDetails,FetchWritingList,FetchDesignLibrary, FetchAllAttachements,FetchWritingsDetails} from './helper/Context';
import { useState,useEffect } from 'react';
import Plyr from 'plyr';


var vistorBasicData;
var count=0;
function App() {

    const[projectsListData,setProjectsListData] = useState([]);
    const[projectsDetailsData,setProjectsDetailsData] = useState([]);
    const[writingsListData,setWritingsListData] = useState([]);
    const[writingsDetailsData,setWritingsDetailsData] = useState([]);
    const[designLibraryData,setDesignLibraryData] = useState([]);
    const[allAttachements,setAllAttachments] = useState([]);
    const[allTools,setAllTools] = useState([])
   

      // eslint-disable-next-line
    const players = Array.from(document.querySelectorAll('.js-player')).map((p) => new Plyr(p));



    var projects,tagArray,writings; 
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
      const records = await base('Projects List').select({maxRecords: 100,sort:[{field: "project_Id"}]}).firstPage(); 
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

      for(var i=0;i<=records.length-1;i++){

        if(records[i].fields.jsonAttachement){

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
      }

      writings = await records.reduce( function (r, a) {
        r[a.fields.writingGroupName] = r[a.fields.writingGroupName] || [];
        r[a.fields.writingGroupName].push(a.fields);
        return r;
    }, {});
    var writingsList=[];
    for(let key in writings) {
                var obj = {"writingGroupName":key,"WritingDetails":writings[key]}
                writingsList.push(obj);
        }





      setWritingsListData(writingsList);
      setWritingsDetailsData(records);

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

    const getAllAttachements = async()=>{
      const allAttachementRecords = await base('All-Attachments').select({maxRecords: 100,sort:[{field: "project_Id"}]}).firstPage();  
      setAllAttachments(allAttachementRecords);
      console.log()
    }
    const getToolsFamiliar = async()=>{
      const allToolsRecords = await base('Tools').select({maxRecords: 100,sort:[{field:"orderID"}]}).firstPage(); 
      setAllTools(allToolsRecords);
    }

    const getIPAddress = async()=>{
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.ipdata.co/?api-key=bfbd3dee6eec431ac604ab6154fb6564f95e6849474ee3de3ba9601b');
        request.setRequestHeader('Accept', 'application/json');
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          vistorBasicData = JSON.parse(this.responseText)
          if(vistorBasicData.ip && count===0 && vistorBasicData.city && vistorBasicData.country_name && vistorBasicData.latitude && vistorBasicData.longitude){
            count++;
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
            if( vistorBasicData.ip === "183.83.252.8"){
              vistorBasicData.me = "manohar"
            }
            else{
              vistorBasicData.me = ""
            }
            var recordSet = [
              {
                  "fields": {
                  "IP Address": vistorBasicData.ip,
                  "Location":  vistorBasicData.city+','+ vistorBasicData.region,
                  "Country": vistorBasicData.emoji_flag + vistorBasicData.country_name,
                  'Latandlong': vistorBasicData.latitude+','+ vistorBasicData.longitude,
                  'me': vistorBasicData.me,
                  'dateAndTime':datetime
                  }
              }
              ]
            base('Visitors').create(recordSet, function(err, records) {
              if (err) {
                  console.error(err);
                  return;
              }
              });
    };
        }
       
  }

request.send();
    }
    

    useEffect(()=>{
        getRecords();
        getProjectsDetailsRecords();
        getWritingRecords();
        getDesignLibrary();
        getAllAttachements();
        getToolsFamiliar();
        getIPAddress();
    },
    // eslint-disable-next-line
    [])


  return (
  <FetchProjectsList.Provider value={{projectsListData,setProjectsListData}}>
  <FetchProjectsDetails.Provider value={{projectsDetailsData,setProjectsDetailsData}}>
  <FetchWritingList.Provider value={{writingsListData,setWritingsListData}}>
      <FetchDesignLibrary.Provider value={{designLibraryData,setDesignLibraryData}}>
        <FetchWritingsDetails.Provider value={{writingsDetailsData,setWritingsDetailsData}}>
        <FetchAllAttachements.Provider value={{allAttachements,setAllAttachments,allTools,setAllTools}}>
    <div className="App">
      <Router>
      <Helmet>
        <title> Manohar Manu | UX UI</title>
        <meta name="description" content="Hey, I'm Manohar. I'm a User Experience designer based out in Bangalore, India"/>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name='keywords' content='manoharmanu,manoharmanu.in,manu,manohar,manohar ui/ux,manoharmanu ui/ux,ui/ux designer in bagalore,ui/ux,ui/ux designer,ui/ux developer,ui/ux architect,ui/ux artist,ui/ux analyst,ui/ux app design,about ui/ux developer,all about ui/ux design,best ui ux design,best ui ux designer,cv ui ux designer,ui/ux designer job description' />
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
    </FetchAllAttachements.Provider>
    </FetchWritingsDetails.Provider>
    </FetchDesignLibrary.Provider>
    </FetchWritingList.Provider>
    </FetchProjectsDetails.Provider>
    </FetchProjectsList.Provider>
  );
}

export default App;

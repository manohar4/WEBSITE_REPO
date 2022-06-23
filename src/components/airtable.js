import Airtable from 'airtable';

var base = new Airtable({
    apiKey: 'keybsrdTHoDUuYEPf'
}).base('app6Go1Ou8TXBXOW8');

var records,projects,tagArray;
var projectsList=[];
let count = 0;

const getRecords = async () =>{
    const records = await base('Projects List').select({maxRecords: 100}).firstPage();

    projects = await records.reduce( function (r, a) {
        r[a.fields.projectGroupName] = r[a.fields.projectGroupName] || [];
        tagArray = a.fields.Project_Tags.split(" ");
        a.fields.Project_Tags = tagArray;
        r[a.fields.projectGroupName].push(a.fields);
        return r;
    }, {});

    for(let key in projects) {
                var obj = {"projectGroupName":key,"projectsDetails":projects[key]}
                projectsList.push(obj);
                count =count++;
        }

   return records;
    
}

getRecords();

export default records;
export {projectsList};

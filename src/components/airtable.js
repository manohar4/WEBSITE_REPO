import Airtable from 'airtable';

var base = new Airtable({
    apiKey: 'keybsrdTHoDUuYEPf'
}).base('app6Go1Ou8TXBXOW8');

var records,projects,tagArray;
var projectsList=[];
let count = 0;

base('Projects List').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage,) {

        projects = records.reduce(function (r, a) {            
            r[a.fields.projectGroupName] = r[a.fields.projectGroupName] || [];
            tagArray = a.fields.Project_Tags.split(" ");
            a.fields.Project_Tags =tagArray;
            r[a.fields.projectGroupName].push(a.fields);
            return r;
        },{});

        for(let key in projects) {
            console.log();
                    var obj = {"projectGroupName":key,"projectsDetails":projects[key]}
                    projectsList.push(obj);
                    count =count++;
            }

}, function done(err) {
    if (err) {
        console.error(err);
        return;
    }
});

export default records;
export {projectsList};

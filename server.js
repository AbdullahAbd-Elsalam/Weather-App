   
// Setup empty JS object to act as endpoint for all routes
const  projectData = {};
 
// Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();
/* Dependencies */
const bodyParser=require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require('cors');
 app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
//set our variable to port 8000.
const port =8000;
// Spin up the server
/*
The port argument refers to the port variable we set above.
 The listening argument refers to a callback function we create. 
 */
const server=app.listen(port,listening);
// Callback function to debug 
/*
This function will run when we execute the listen method to let you know 
that the server is running and on which port by logging messages to the console. 
 */
function listening(){
    console.log("server is running");
    console.log(`running in localhost : ${port}`);
}
// Initialize all route with a callback function
  
 app.get('/all',(req,res)=>{
    console.log('data is recieve');
    res.send(projectData);
   //console.log(projectData)
});
//post request to client server to post data in it
app.post('/api',(req,res)=>{
   console.log(req.body);
         //put data as like json object
         projectData.temps=req.body.temps;
         projectData.date=req.body.date;
         projectData.feels=req.body.feels;
      
       res.send(projectData); 
    console.log(projectData)
    } ); 
  


 
 
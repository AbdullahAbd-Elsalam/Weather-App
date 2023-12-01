 
 //get date  
 let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API

const unit='&units=metric'
 //get value of user feel
 const feel=document.getElementById('feelings');
  
 document.getElementById('generate').addEventListener('click',performAction);
 function performAction(e){

get_api_data()
//post api data to server
 .then((data)=>{
 //add data to post request
 
   postData('/api',{temps:data.main.temp,date:newDate,feels:feel.value})
})
 
//get data form server and update it to show in brower
.then(()=>{
  updateUI();
}) 
 
 }
 // get fake api data
 const get_api_data=async()=>{
     
   const API_KEY='0f873c4b9838de633182f952135c4ed6';
   let newcode=document.getElementById('zip');

   const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${newcode.value}${unit}&appid=0f873c4b9838de633182f952135c4ed6`)
   //const res=await fetch('/all')
    

     //call fake API
         if(newcode.value=="")
     {
       alert('please enter zipcode')
      
     }  
     else{  
         try
          {

           const data=await res.json();
           
           console.log(data);
           return data;
          } catch(e)
          {
           console.log("error");
          }//end of catch */
         } // end of api recieved
    }

 
//  post data to server 
// TODO-Async GET
// Async POST
const postData = async ( url = '', data = {})=>{

  console.log(data);
  const response = await fetch(url, {
  method: 'POST', 
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  }, 
  /*
  which turns JavaScript objects and JSON data into a string for our server to receive the information. 
   */
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    // convert data to json object
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
  console.log("error", error);
  }
}
 //get data from server and show it in my browser
const updateUI=async()=>{
  //get request from url
  const request=await fetch('/all')
  try
   {

     const allData=await request.json();
     console.log(allData);
    document.getElementById('temp').innerHTML=`temp : ${allData.temps}`;
    document.getElementById('date').innerHTML=`date : ${allData.date}`;
    document.getElementById('content').innerHTML=`I feel : ${allData.feels}`;
  
  }catch(e)
  {
console.log('error is',e);
  } 
}


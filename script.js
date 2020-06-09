// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", init);

function init(){
 let form = document.querySelector("form");
 form.addEventListener("submit",preventDefault);
 //console.log(form);

//    //init status outputs
//  let str_launchStatus=  document.getElementById("launchStatus");  
//  let str_pilotStatus=   document.getElementById("pilotStatus");
//  let str_copilotStatus= document.getElementById("copilotStatus");
//  let str_fuelStatus=    document.getElementById("fuelStatus");
//  let str_cargoStatus=   document.getElementById("cargoStatus");
//    //other form elements
//  let div_missionTarget=    document.getElementById("missionTarget");
//  let div_launchForm=       document.getElementById("launchForm");
//  let div_launchStatusCheck=document.getElementById("launchStatusCheck");
//  let div_faultyItems=      document.getElementById("faultyItems");

 //debug-should be blanks here-but no errors
   //inputs
 //console.log("pilot name:",str_pilotName,"\ncopilot name:",str_copilotName,"\nFuel level:",int_fuelLevel,"\nCargo mass:",int_cargoMass);
 
   //outputs-should have defaults 
   //str_launchStatus="Test!";
 //console.log("\nLaunch Status:",str_launchStatus,"\nPilot status:",str_pilotStatus,"\nCopilot status:",str_copilotStatus,"\nFuel Status:",str_fuelStatus,"\nCargo Status:",str_cargoStatus);


}

function preventDefault(){

   //init-form values 
   let str_pilotName    =  document.querySelector("input[name=pilotName]")    .value;
   let str_copilotName  =  document.querySelector("input[name=copilotName]")  .value; 
   let int_fuelLevel    =  document.querySelector("input[name=fuelLevel]")    .value;
   let int_cargoMass    =  document.querySelector("input[name=cargoMass]")    .value;

   console.log("pilot name:",str_pilotName,"\ncopilot name:",str_copilotName,"\nFuel level:",int_fuelLevel,"\nCargo mass:",int_cargoMass);
   
   if (str_pilotName === "" || str_copilotName === "" || int_fuelLevel === "" || int_cargoMass ==="") {
      alert("Pilot and CoPilot names, Fuel level and Cargo Mass are all required fields");
      event.preventDefault();
    }

}
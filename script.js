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
console.clear();
window.addEventListener("load", init);

function init(){
 let btn_submit = document.getElementById("formSubmit");
 btn_submit.addEventListener("click",preventDefault);
 
 displayPlanet();
 
 //console.log(form);


 //console.log("\nLaunch Status:",str_launchStatus,"\nPilot status:",str_pilotStatus,"\nCopilot status:",str_copilotStatus,"\nFuel Status:",str_fuelStatus,"\nCargo Status:",str_cargoStatus);
}

function preventDefault(){
    event.preventDefault();
   //init-form values 
   let str_pilotName    =         document.querySelector("input[name=pilotName]")    .value;
   let str_copilotName  =         document.querySelector("input[name=copilotName]")  .value; 
   let int_fuelLevel    =  Number(document.querySelector("input[name=fuelLevel]")    .value);
   let int_cargoMass    =  Number(document.querySelector("input[name=cargoMass]")    .value);

   //console.log("pilot name:",str_pilotName,"\ncopilot name:",str_copilotName,"\nFuel level:",int_fuelLevel,"\nCargo mass:",int_cargoMass);
   
   if (str_pilotName === "" || str_copilotName === "" || int_fuelLevel === 0 || int_cargoMass === 0) {
      alert("Pilot and CoPilot names, Fuel level and Cargo Mass are all required fields");
    } else if (!isNaN(Number(str_pilotName)) || !isNaN(Number(str_copilotName)) || isNaN(Number(int_fuelLevel)) || isNaN(Number(int_cargoMass))  ){
      alert("Make sure to enter valid information for each field!");
    } else {
        let makeVisible = document.getElementById("faultyItems");
        makeVisible.style.visibility = "visible";

        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `${str_pilotName} ready`;

        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `${str_copilotName} ready`;



        if(int_fuelLevel < 10000){
           let fuelStatus = document.getElementById("fuelStatus");
           fuelStatus.innerHTML = `Fuel level too low for launch`;
        }else{
         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }


        if (int_cargoMass > 10000) {
           let cargoMass = document.getElementById("cargoStatus");
           cargoMass.innerHTML = `Too much cargo for launch`;
        }else{
         let cargoMass = document.getElementById("cargoStatus");
         cargoMass.innerHTML = `Cargo mass low enough for launch`;
        }




        if (int_cargoMass < 10000 && int_fuelLevel > 10000){
           let launchStatus = document.getElementById("launchStatus");
           launchStatus.innerHTML = `Shuttle ready for launch.`;
           launchStatus.style.color = "green";
        } else {
           let launchStatus = document.getElementById("launchStatus");
           launchStatus.innerHTML = `Shuttle not ready for launch.`;
           launchStatus.style.color = "red";
        }

        
    }

}

function displayPlanet(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
           response.json().then(function(json){
              let randJSON = (Math.floor(Math.random()* json.length))
              const missionTarget = document.getElementById("missionTarget");
              missionTarget.innerHTML = `<h2>Mission Destination</h2>
              <ol>
                 <li>Name: ${json[randJSON].name}</li>
                 <li>Diameter: ${json[randJSON].diameter}</li>
                 <li>Star: ${json[randJSON].star}</li>
                 <li>Distance from Earth: ${json[randJSON].distance}</li>
                 <li>Number of Moons: ${json[randJSON].moons}</li>
              </ol>
              <img src="${json[randJSON].image}">`
           })
        })
}
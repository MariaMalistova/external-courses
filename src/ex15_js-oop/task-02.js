function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}
  
Appliance.prototype.plugIn = function() {
    this.isPlugged = true;
}
  
Room.prototype.calculatePower = function() {
    let totalPower = 0;
    this.appliances.forEach(function(appliance) {
        if (appliance.isPlugged) {
            totalPower += appliance.power;
        }
    });
    return totalPower;
  }
function Room(appliances) {
    this.appliances = appliances;
}
  
Room.prototype.findAppliance = function(applianceName) {
    let applianceInfo = "";
    let isApplianceFound = false;
    for (let i = 0; i < this.appliances.length; i++) {
        if (this.appliances[i].name === applianceName) {
            for (let key in this.appliances[i]) {
                if (this.appliances[i].hasOwnProperty(key) && typeof this.appliances[i][key] !== "function") {
                    applianceInfo += key + ": " + this.appliances[i][key] + "\n"; 
                }
            }
            isApplianceFound = true;
            break;
        }    
    }
    if (!isApplianceFound) {
        applianceInfo = "This electrical appliance is not in the room";
    }      
    console.log(applianceInfo);
}
  
const lamp = new Appliance("lamp", 78);
const kettle = new Appliance("kettle", 108);
const TV = new Appliance("TV", 168);
const room = new Room([lamp, kettle, TV]);
kettle.plugIn();
TV.plugIn();
console.log(room.calculatePower());
room.findAppliance("kettle");
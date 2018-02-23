function init(){
    if(navigator.geolocation){
        document.getElementById("notify").innerHTML = "Checking Location";
        navigator.geolocation.getCurrentPosition(successFunc, errorFunc);

    }
    else {
        document.getElementById("notify").innerHTML = "Doesn't support location";
    }
}

function successFunc(pos){
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    document.getElementById("notify").innerHTML = "You are at Lat: " + lat + " Long: " + long;
}

function errorFunc(pos){
    document.getElementById("notify").innerHTML = "Error";
}

/*this doesn't work!
function setName(){
    var userName = document.getElementById("yourName").value;
    if(userName === "") return false;
    localStorage.setItem("name", userName);
    document.getElementById("yourName").value = "Name Saved";
}

function getName(){
    if(localStorage.getItem("name" === null)) return false;
    document.getElementById("yourName").value = "Name Stored: " + localStorage.getItem("name");

}

function removeName(){
    if(localStorage.getItem("name" === null)) return false;
    localStorage.removeItem("name");
    document.getElementById("yourName").value = "Name Removed";
}
*/



onload = init;
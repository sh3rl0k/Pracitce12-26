var Fname = document.getElementById("fname").value;
var Lname = document.getElementById("lname").value;
var Company = document.getElementById("company").value;
var Email = document.getElementById("email").value;

//function to check if the text fields are empty
document.getElementById("btnform1").onclick = function () {
    var x = document.forms["myForm"]["fname", "lname","company","email"].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }
}
//document.getElementById("btnform1").onclick = function () {
    
//}
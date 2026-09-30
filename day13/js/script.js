let name = document.querySelector("#name");
let age = document.querySelector("#age");
let job = document.querySelector("#job");
let city = document.querySelector("#city");
let submit = document.querySelector(".submit");

submit.addEventListener("click", function () {

    let nameValue = name.value;
    let ageValue = age.value;
    let jobValue = job.value;
    let cityValue = city.value;

    if (nameValue === "" || ageValue === "" || jobValue === "" || cityValue === "" ) {
        alert("Please fill all fields");
    } else {
        console.log("Name:", nameValue);
        console.log("Age:", ageValue);
        console.log("Job:", jobValue);
        console.log("City", cityValue);
        if (ageValue < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        };

        
    }

});
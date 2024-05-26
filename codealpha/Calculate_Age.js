function calculateAge() {

    var dob = document.getElementById('dob').value;


    if (dob === "") {
        alert("Please enter your date of birth.");
        return; 
    }

    var birthDate = new Date(dob);
    var today = new Date();


    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    var dayDifference = today.getDate() - birthDate.getDate();


    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = "Age: " + age;
}

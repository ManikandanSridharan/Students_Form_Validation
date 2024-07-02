document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    //submit validation
    var hasError = false;

    //name validation
    var name = document.getElementById('name').value;
    var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
        document.querySelector(".nameError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".nameError").style.display = "none";
    }

    //age validation
    var age = document.getElementById('age').value;
    var ageRegex = /^\d{2}$/;
    if (!ageRegex.test(age)) {
        document.querySelector(".ageError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".ageError").style.display = "none";
    }

    //gender validation
    var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }

    }

    if (!gender) {
        document.querySelector(".genderError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".genderError").style.display = "none";
    }
    // var gender = document.querySelector('input[name="gender"]:checked');
    // if (gender) {
    //     gender = gender.value;
    // } else {
    //     alert("check gender")
    // }

    //course valiadtion
    var course = document.getElementById('select').value;
    if (!course) {
        document.querySelector(".courseError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".courseError").style.display = "none";
    }

    //language validation
    var checkElements = document.getElementsByName('check');
    var languages = [];
    for (var i = 0; i < checkElements.length; i++) {
        if (checkElements[i].checked) {
            languages.push(checkElements[i].value);
        }
    }

    if (languages.length === 0) {
        document.querySelector(".languageError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".languageError").style.display = "none";
    }

    //email valiadtion
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com/
    if (!emailRegex.test(email)) {
        document.querySelector(".emailError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".emailError").style.display = "none";
    }

    //phone valiadtion
    var phonenumber = document.getElementById('phonenumber').value;
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phonenumber)) {
        document.querySelector(".phoneError").style.display = "inline";
        hasError = true;

    } else {
        document.querySelector(".phoneError").style.display = "none";
    }
    //submit validation
    // If there are any errors, prevent the form from submitting
    if (hasError) {
        return;
    }
    else {
        alert("Form Submitted Succesfully")
    }

    // If no errors, add the row to the table

    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${languages.join(', ')}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${phonenumber}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;
    document.getElementById('student-rows').appendChild(row);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('select').value = '';
    var genderElements = document.getElementsByName('gender');
    for (var i = 0; i < genderElements.length; i++) {
        genderElements[i].checked = false;
    }
    var checkElements = document.getElementsByName('check');
    for (var i = 0; i < checkElements.length; i++) {
        checkElements[i].checked = false;
    }
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';
});

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
   var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
     
     }
   // var gender = document.querySelector('input[name="gender"]:checked');
    // if (gender) {
    //     gender = gender.value;
    // } else {
    //     alert("check gender")
    // }

    var course = document.getElementById('select').value;
    var email = document.getElementById('email').value;

    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
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
    document.getElementById('email').value = '';
});

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

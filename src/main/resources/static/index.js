var users=[
{
  "name":"John Doe",
  "gender": "Male",
  "image":"john.png"

},
{
  "name":"Jane Doe",
  "gender":"Female",
  "image":"jane.png"
},
]

var id=0;
function toggleuser() {
   id = (id+1)%2

    var userImage = document.getElementById("user-image");
      userImage.src = users[id].image;
    var userName = document.getElementById("user-name");
       userName.innerHTML = users[id].name;
    var userGender = document.getElementById("user-gender");
     userGender.innerHTML = users[id].gender;
}
function RandomUser() {
    fetch("https://randomuser.me/api/")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }
            return response.json();
        })
        .then(function (data) {
            var user = data.results[0];

            document.getElementById("user-image").src = user.picture.large;
            document.getElementById("user-name").textContent =
                user.name.first + " " + user.name.last;
            document.getElementById("user-gender").textContent = user.gender;
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
}




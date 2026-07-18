var users=[
{
  "name":"Ayanokoji Kiyotaka",
  "gender": "Sigma male",
  "image":"ayanokoji.png"

},
{
  "name":"Makima",
  "gender":"Sigma Female",
  "image":"image.png"
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
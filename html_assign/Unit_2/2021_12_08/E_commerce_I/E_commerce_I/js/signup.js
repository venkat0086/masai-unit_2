document.querySelector("button").addEventListener("click",signup);
var userData=JSON.parse(localStorage.getItem("miniUserDatabase")) || [];

function signup()
{
    var email=document.querySelector("#email").value;
    var user=document.querySelector("#user").value;
    var password=document.querySelector("#password").value;
    

    var userCred={
        emailAdd:email,
        userName:user,
        pass:password
    };
    userData.push(userCred);
    localStorage.setItem("miniUserDatabase", JSON.stringify(userData));
    window.alert("You are Successfully Registered.!");
}
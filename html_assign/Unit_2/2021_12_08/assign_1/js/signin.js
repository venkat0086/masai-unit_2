document.querySelector("button").addEventListener("click",signIn)
var regUser=JSON.parse(localStorage.getItem("miniUserDatabase"));
function signIn()
{
    var count=0;
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;

    if(email=="admin" && password=="admin")
    {
        window.location.href="form.html";
    }
    else
    {
        for(var i=0;i<regUser.length;i++)
        {
            if(regUser[i].emailAdd==email && regUser[i].pass==password)
            {
                count++;
            }
        }
    }
    if(count>0)
    {
        window.alert("You Login Successful")
        window.location.href="prod.html";
    }  
    else
    {
        window.alert("Invalid Login Credentials");
    }
}
document.querySelector("#contain").addEventListener("submit",addCart);
var prodData=JSON.parse(localStorage.getItem("prodDatabase")) || [];
function addCart(event)
{
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var price=document.querySelector("#price").value;
    var image=document.querySelector("#image").value;

    var addproduct={
        name:name,
        price:price,
        image:image
    }
    prodData.push(addproduct);
    localStorage.setItem("prodDatabase",JSON.stringify(prodData));
    window.location.reload();
}

document.querySelector("button").addEventListener("click",function()
{
    window.location.href="signin.html";
});
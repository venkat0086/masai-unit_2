var products = JSON.parse(localStorage.getItem("prodDatabase")) || [];
var cart=JSON.parse(localStorage.getItem("cartItem")) || [];

document.querySelector(".total").textContent=total();
document.querySelector("button").textContent=cart.length;

document.querySelector("button").addEventListener("click",function()
{
    window.location.href="cart.html";
});
displayProd(products);

function displayProd(products)
{
    products.map(function(ele)
    {
    var div=document.createElement("div");

    var img=document.createElement("img");
    img.setAttribute("src",ele.image);
    
    var h2=document.createElement("p");
    h2.textContent=ele.name;

    var price=document.createElement("h2");
    price.textContent="Rs. "+ele.price;

    var button=document.createElement("button");
    button.textContent="Add To Cart";
    button.addEventListener("click",function()
    {
        addToCart(ele);
    });
    div.append(img,price,h2,button)
    document.querySelector("#contain").append(div);
});
}


    function addToCart(ele)
    {
        cart.push(ele);
        localStorage.setItem("cartItem",JSON.stringify(cart));
        window.location.reload();
    }

    function total()
    {
        var sum=0;
        for(var i=0;i<cart.length;i++)
        {
            sum+=Number(cart[i].price);
        }
        return sum;
    }
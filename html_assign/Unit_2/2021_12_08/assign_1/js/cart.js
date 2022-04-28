var cart=JSON.parse(localStorage.getItem("cartItem")) || [];
    var total=document.querySelector("span").textContent=total();
    document.querySelector("button").addEventListener("click",applyCoupon);
    document.querySelector("#buy").addEventListener("click",function()
    {
        window.location.href="success.html";
    });
   
    displayProd(cart);

    function displayProd(cart)
    {
        cart.map(function(ele)
        {
        var div=document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",ele.image);
        
        var h2=document.createElement("p");
        h2.textContent=ele.name;

        var price=document.createElement("h2");
        price.textContent="Rs. "+ele.price;

        div.append(img,price,h2)
        document.querySelector("#contain").append(div);
    });
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
   
    function applyCoupon()
    {
        var div=document.createElement("div");

        if(document.querySelector("input").value == "masai30")
        {
            var disc=(total*30)/100;
            var afdisc=total-disc;
            var span=document.querySelector("span").style.textDecoration="line-through";
            var res=document.querySelector("#res").textContent="Rs. "+afdisc;
            var h4=document.querySelector("h4").textContent="After Applying coupon: ";
        }
        else
        {
            window.alert("Invalid Coupon");
        }
    }
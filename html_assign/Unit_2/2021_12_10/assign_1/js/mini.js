var data = [
  {
    MRP: 690,
    type: "Striped Round Neck T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
  },
  {
    MRP: 799,

    type: "Striped Round Neck T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
  },
  {
    MRP: 899,

    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
  },
  {
    MRP: 999,
    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
  },
  {
    MRP: 1099,

    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
  },
  {
    MRP: 1299,
    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
  },
  {
    MRP: 1399,

    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
  },
  {
    MRP: 499,
    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
  },
  {
    MRP: 299,

    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
  },
  {
    MRP: 199,
    type: "Men Printed Cotton T-shirt",
    image_url:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
  },
];

displaydata(data);

function displaydata(data) {
  document.querySelector("#main").textContent = "";
  data.map(function (ele) {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", ele.image_url);

    var nam = document.createElement("h4");
    nam.textContent = ele.type;

    var roles = document.createElement("p");
    roles.textContent = "Rs. " + ele.MRP;

    var btn = document.createElement("button");
    btn.textContent = "Checkout";

    var res = document.querySelector("#main");
    div.append(image, nam, roles, btn);
    res.append(div);
  });
}

function sortPrice() {
  var selected = document.querySelector("#priceSort").value;
  if (selected == "high") {
    data.sort(function (a, b) {
      return b.MRP - a.MRP;
    });
  }
  if (selected == "low") {
    data.sort(function (a, b) {
      return a.MRP - b.MRP;
    });
  }
  displaydata(data);
}

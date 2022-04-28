var data = [
    {
      name: "Ankush Sachdeva",
      image:
        "https://d27028dliefpk3.cloudfront.net/assets/our-investors/ankush-sachdeva-sharechat.jpg",
      role: "Co-founder and CEO, ShareChat",
    },
    {
      name: "Bhanu Pratap Singh",
      image:
        "https://d27028dliefpk3.cloudfront.net/assets/our-investors/bhanu-pratap-singh-sharechat.jpg",
      role: "Co-founder and CTO, ShareChat",
    },
    {
      name: "Farid Ahsan",
      image:
        "https://d27028dliefpk3.cloudfront.net/assets/our-investors/farid-ahsan-sharechat.png",
      role: "Co-founder and COO, ShareChat",
    },
    {
      name: "Amit Kumar Agarwal",
      image:
        "https://d27028dliefpk3.cloudfront.net/assets/our-investors/amit-kumar-agarwal-nobroker.jpg",
      role: "Founder and CEO, NoBroker",
    },
  ];

  data.map(function (ele) {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", ele.image);

    var nam = document.createElement("h3");
    nam.textContent = ele.name;

    var roles = document.createElement("p");
    roles.textContent = ele.role;

    var res = document.querySelector("#main");
    div.append(image, nam, roles);
    res.append(div);
  });
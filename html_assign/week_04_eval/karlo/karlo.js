document.querySelector("#main").addEventListener("submit", addItems);
  var arr = JSON.parse(localStorage.getItem("raiseTicket")) || [];
  displayItems(arr);

  function addItems(event) {
    event.preventDefault();
    window.location.reload();
    var category = document.querySelector("#cate").value;
    var ticketbody = document.querySelector("#tcbody").value;
    var datestamp = document.querySelector("#dates").value;
    var ticketnum = document.querySelector("#tcnum").value;

    var karlo = {
      cate: category,
      ticket: ticketbody,
      date: datestamp,
      ticketn: ticketnum,
    };

    arr.push(karlo);
    localStorage.setItem("raiseTicket", JSON.stringify(arr));
  }
  function displayItems(arr) {
    arr.map(function (ele) {
      var row = document.createElement("tr");

      var td1 = document.createElement("td");
      td1.textContent = ele.cate;

      var td2 = document.createElement("td");
      td2.textContent = ele.ticket;

      var td3 = document.createElement("td");
      td3.textContent = ele.date;

      var td4 = document.createElement("td");
      td4.textContent = ele.ticketn;

      row.append(td1, td2, td3, td4);
      document.querySelector("tbody").append(row);
    });
  }

  function sortTicket() {
    document.querySelector("tbody").textContent = "";
    var selected = document.querySelector("#sortby").value;
    if (selected == "high") {
      arr.sort(function (a, b) {
        return Number(b.ticketn) - Number(a.ticketn);
      });
    }
    if (selected == "low") {
      arr.sort(function (a, b) {
        return Number(a.ticketn) - Number(b.ticketn);
      });
    }
    displayItems(arr);
  }
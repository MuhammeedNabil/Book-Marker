var bookName = document.getElementById("SiteName");
var webURL = document.getElementById("SiteURL");
// var webURL = document.querySelector("#SiteURL").value;
var tableRow = document.getElementById("tableRow");
var submitBtn = document.getElementById("submitBtn");
var productsList;

(function () {
  if (localStorage.getItem("data") == null) {
    productsList = [];
  } else {
    productsList = JSON.parse(localStorage.getItem("data"));
    display();
  }
})();

submitBtn.onclick = function () {
  var bookObj = {
    name: bookName.value,
    URL: webURL.value,
  };
  productsList.push(bookObj);
  localStorage.setItem("data", JSON.stringify(productsList));
  display();
  clearForm();
};

function display() {
  var box = ``;
  for (var i = 0; i < productsList.length; i++) {
    box += ` <tr>
      <td><h6>${productsList[i].name}</h6></td>
      <td><a onclick=visitFun(${i})  href="${productsList[i].URL}" target="blanck" class="btn btn-primary shadow-lg">Visit</a></td>
      <td><button onclick=delFun(${i}) class="btn btn-danger shadow-lg">Delete</button></td>
    </tr>`;
  }
  document.getElementById("tableRow").innerHTML = box;
}

function delFun(index) {
  productsList.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(productsList));
  display();
}

function visitFun(index, url) {
  console.log("log", url);
  // window.open(url, "_blank");
}

function clearForm() {
  bookName.value = "";
  webURL.value = "";
}

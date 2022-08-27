// ****************************Cart Open*****************************

let cart = document
  .querySelector("#cart_opan")
  .addEventListener("click", openCart);
let open = document.querySelector(".su_add_to_cart");
let close = document
  .querySelector("#idont")
  .addEventListener("click", closeCart);

function openCart() {
  event.preventDefault();
  open.classList.add("active");
}
function closeCart() {
  event.preventDefault();
  open.classList.remove("active");
}

// ****************************Search Open*****************************

let search = document
  .querySelector("#search")
  .addEventListener("click", openSearch);
let open_search = document.querySelector(".search_pr");
let close_search = document
  .querySelector("#idont_closs")
  .addEventListener("click", closeSearch);

function openSearch() {
  event.preventDefault();
  open_search.classList.add("open");
}
function closeSearch() {
  event.preventDefault();
  open_search.classList.remove("open");
}
// ************************** user ************************************

// let user_in = document.querySelector("#open_now");

// user_in.addEventListener("click", openUser);
// let open_manu = document.querySelector(".drop_down");
// function openUser() {
//   event.preventDefault();
//   // console.log("yes");
//   open_manu.classList.add("open");
// }
// *************************  Quntity Show *************************
let data = JSON.parse(localStorage.getItem("add_to_cart"));
cartData(data);
function cartData(data) {
  document.querySelector(".ap_img_name").innerHTML = "";
  data.forEach(function (ele) {
    let qut = ele.qun;
    document.querySelector(".su_qun").innerText = "";
    document.querySelector(".su_qun").append(qut);

    let div = document.createElement("div");

    let cart_avtar = document.createElement("img");
    cart_avtar.setAttribute("src", ele.ime);

    let tital = document.createElement("p");
    tital.innerText = ele.name;

    let quntity = document.createElement("p");
    quntity.innerText = "Qty: ";
    quntity.style.color = "grey";
    let price = document.createElement("p");
    price.innerText = "Rs. ";
    price.style.marginLeft = "20px";
    let price_num = document.createElement("p");
    price_num.innerText = ele.price;

    let cros = document.createElement("i");
    cros.setAttribute("class", "fa-solid fa-x");
    cros.addEventListener("click", function () {
      delet(ele.name);
    });

    let total_price = Number(ele.qun) * Number(ele.price);
    let total_price_num = Number(total_price.toFixed(2));
    document.querySelector("#total_price_in_nev").innerText =
      total_price_num + " .00";

    let div2 = document.createElement("div");
    div2.append(tital, quntity, qut, price, price_num);
    div.append(cart_avtar, div2, cros);
    document.querySelector(".ap_img_name").append(div);
  });
}
function delet(ele) {
  let delete_name = data.filter(function (el) {
    return el.name != ele;
  });
  let new_data = delete_name;
  localStorage.setItem("add_to_cart", JSON.stringify(new_data));
  window.location.reload();
}

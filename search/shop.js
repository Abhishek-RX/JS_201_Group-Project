// Shop 

let data=JSON.parse(localStorage.getItem("shop"));
console.log("data :",data)

function shop(data){

    
    let title=document.createElement("h1");
    title.innerText=data.title;
    title.style.fontSize="18px"

    let des=document.createElement("p");
    des.innerText=data.dis;
    des.style.fontSize="10px"

    let price=document.createElement("p");
    price.innerText=`₹${data.price} MRP incl. of all taxes`;
    price.style.fontSize="12px";

    let color=document.createElement("p");
    color.innerText=data.color;
    color.style.fontSize="11px";

    
    document.getElementById("box").append(title,des,price,color)

      
    for(let i=0;i<data.images.length;i++){
        let image=document.createElement("img");
        image.src=data.images[i];
        // console.log(data.images[i])
        document.getElementById("image").append(image)
    } 
}

shop(data)

document.getElementById("btn").addEventListener("click",function(){
    add_to_cart(data)
})
let cart= JSON.parse(localStorage.getItem("cart")) || [] ;

function add_to_cart(data){
  event.preventDefault()
    cart.push(data)
   
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added to bag")
    window.location.href="cart.html";
}

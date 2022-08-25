// Shop 

let data=JSON.parse(localStorage.getItem("shop"));

function shop(data){

    let div=document.createElement("div");
    
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

    
    let image=document.createElement("img");
    image.src=data.poster

    document.getElementById("image").append(image)
}

shop(data)

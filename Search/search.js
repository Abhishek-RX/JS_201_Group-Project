// Search functionality

let Dress_data = [
    {
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/214/8620496094_1_1_1.jpg?ts=1661158301350",
        title: "PRINTED MIDI DRESS",
        price: " 4,990.00 ",
        dis: "Off-the-shoulder midi dress with a straight-cut neckline. Draped fabric. Invisible side zip fastening.",
        color: "RED / WHITE | 8620/496",
        images: [
            
                {1: "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_6_1_1.jpg?ts=1660903750770"},
                {2: "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_6_3_1.jpg?ts=1660903752356"},
                {3: "https://static.zara.net/photos///2022/I/0/1/p/8620/496/094/2/w/750/8620496094_2_1_1.jpg?ts=1661158300856"},  
        ]

    },
    {
        poster: "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_1_1_1.jpg?ts=1659355163146",
        title: "DRAPED DRESS",
        price: "2,990.00",
        dis: "Short dress with a straight neckline and exposed shoulders. Draped metallic fabric. Invisible side zip fastening.",
        color: "GOLDEN | 8129/384",
        images: [
            
                {1: "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_2_1_1.jpg?ts=1659355164881"},
                {2: "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/12/w/750/8129384303_2_4_1.jpg?ts=1659355162384"},
                {3: "https://static.zara.net/photos///2022/I/0/1/p/8129/384/303/2/w/750/8129384303_6_1_1.jpg?ts=1658411398005"},
        ]

    },

    {
        poster: "https://static.zara.net/photos///2022/I/0/1/p/4786/058/620/12/w/750/4786058620_1_1_1.jpg?ts=1654761396463",
        title: "PRINTED MINI DRESS",
        price: " 2,990.00",
        dis: "Short collared dress with long sleeves and elastic trims. Contrast belt detail. Ruffled hem. Fastens at the front with buttons.",
        color: "PINK | 4786/058",
        images: [
                {1: "https://static.zara.net/photos///2022/I/0/1/p/4786/058/620/12/w/750/4786058620_2_1_1.jpg?ts=1654761394174"},
                {2: "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"},
                {3: "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"},
        ]

    },
]


document.querySelector("#dress").addEventListener("click", function () {
    Show(Dress_data)
    console.log(Dress_data)

});


function Show(data) {
    data.forEach((el) => {

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.poster;
        image.addEventListener("click",function(){
            shop(el)
        })

        let title = document.createElement("p");
        title = el.title;
        
        let price=document.createElement("p");
        price.innerText=`₹${el.price}`

        box.append(image,title,price);
        document.getElementById("main").append(box);
    });




}
function shop(el){
    localStorage.setItem("shop",JSON.stringify(el))
    window.location.href="shop.html"

}

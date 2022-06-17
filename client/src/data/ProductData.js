import { useState } from "react";

let demmy_data=[
    {
        id:2,
        title:"shoes",
        price:899,
        image: "https://rukminim2.flixcart.com/image/832/832/kcp4osw0/shoe/j/e/x/sport-fashion-9-hey-men-black-original-imaftrhqfu52vm3s.jpeg?q=70" ,
        desc: "Exclusive Affordable Collection of Trendy & Stylish Sport Sneakers Shoes Running Shoes For Men  (Black)"   
        },{
            id:2,
            title:"Slim Men Blue Jeans",
            price:799
            imgae: "https://rukminim2.flixcart.com/image/832/832/kmccosw0/jean/3/k/f/32-ud0029-united-denim-original-imagf9n9vt3qtyfd.jpeg?q=70" ,
            desc:"Special PriceGet extra 10% off (price inclusive of discount)T&C"
        }
];

const[pruduct,setProduct]=useState(demmy_data);
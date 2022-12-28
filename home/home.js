//select cover
let picCover=document.querySelector(".img1");


//array of image
let imgArray=["1.jpg","2,jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
setInterval(()=>{
    let randomNumber=Math.floor(Math.random() * imgArray.length);
    picCover.style.backgroundImage='url("imgs/'+ imgArray[randomNumber] +' ")';
},1000)

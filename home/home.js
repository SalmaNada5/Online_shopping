//select cover
let picCover=document.querySelector(".cover");


//array of image
let imgArray=["cover.jpg","1.jpg","2.jpg","3.jpg","4.jpg","6.jpg"];
setInterval(()=>{
    let randomNumber=Math.floor(Math.random() * imgArray.length);
    picCover.style.backgroundImage='url("imgs/'+ imgArray[randomNumber] +' ")';
},3000)

var count=0
function myFunction() {
    document.getElementById("btn").style.color = "red";
    count+=1;
    console.log(count);
    alert('The payment has been successfully completed, and what you requested will be delivered to you ->'+'required number: '+count);  
};

let my_Image=document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
};


my_Image.onclick = function() {
    let temp_Image=my_Image.getAttribute("src");
    if(temp_Image === "image/flower.jpg"){
        my_Image.setAttribute("src","image/flower1.jpg");
    }else{
        my_Image.setAttribute("src","image/flower.jpg");
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }

myButton.onclick = function (){
    setUserName();
};

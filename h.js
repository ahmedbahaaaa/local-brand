var btn=document.querySelector(".btn-fill");

btn.onclick=function test(){
    open("file:///D:/wep/hodi/page2.html",true);
};

var btn1=document.querySelector(".btn-outline active");
var changefont=document.querySelector(".change");

btn1.ondblclick()=function changee(){
    changefont.innerHTML=("صلي ع النبي");
};

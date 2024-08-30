/*Navbar */
let menubtn = document.getElementById("menu-btn");
let ulnavbar = document.getElementById("ul-navbar");
let xmark = document.getElementById("x-mark")

menubtn.addEventListener("click",function (){
    ulnavbar.classList.toggle("active");
    menubtn.classList.toggle("active");
});

xmark.addEventListener("click",function (){
    // ulnavbar.classList.remove("active");
    // menubtn.classList.remove("active");
    ulnavbar.classList.toggle("active");
    menubtn.classList.toggle("active");
});


/*Start Loader */
var loading = document.getElementById("loading");
var htmlSheet = document.getElementById("html");

function loader (){
    loading.classList.add("active"); /*هنا جبت اللوود وفعلت عدم التشغيل */
    htmlSheet.classList.add("active");
}
function fadeOut(){
    setTimeout(loader,1000); /* هنا قولت وقف التشغيل بعد 2 ثواني*/
}

window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل بعد تحميل الصفحة*/
    fadeOut()   
}
/*End Loader */
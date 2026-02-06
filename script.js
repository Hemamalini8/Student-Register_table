var n1=document.querySelector('.Navbar1');
var n2=document.querySelector('.Navbar2');
window.addEventListener('scroll',()=>{
    if(window.scrollY>80){
        n1.style.display="none";
        n2.style.display="flex";
    }
    else{
        n1.style.display="flex";
        n2.style.display="none";
    }
});

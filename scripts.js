function onClickCheckBox(){
    let spanElements = document.getElementById("spanId").getElementsByTagName("span");

    if(document.getElementById("checkBoxId").checked){
        /* span.forEach(element =>span[element].style.backgroundColor = "red"); */
        /* span.foreach(element => console.log(element)); */
        /* console.log(span[1].style.backgroundColor="blue"); */
        /* span.forEach(element => {span[element].style.backgroundColor = "red" }); */
        /* span.forEach(x => console.log(x)); */
        spanElements[0].style.transform = "rotate(45deg) translate(9px, 13px)" ;  /* translate(9px, 8px) */
        spanElements[1].style.opacity = "0";
        spanElements[2].style.transform = "rotate(-45deg) translate(9px, -15px)";  /* translate(7px, -5px) */

        openMenu();
        
       
    }
    else{

        spanElements[0].style.transform = "rotate(0deg)";  /* translate(9px, 8px) */
        spanElements[1].style.opacity = "1";
        spanElements[2].style.transform = "rotate(0deg)";

        closeMenu();

    }
   
}

function openMenu(){
    /* alert("open menu"); */
    document.getElementById("navMenu").style.zIndex = 1; 
    /* document.getElementById("checkBoxId").zIndex = 10; */
    document.getElementById("navMenu").style.left = "10vw"; 
    /* document.getElementByClassName("can").classList.add("menuToggle"); */
}
function closeMenu(){
    document.getElementById("navMenu").style.left = "100vw";
    /* document.getElementById("navMenu").style.bottom = "100vh"; */

    /* alert("close menu"); */
    /* document.getElementByClass
    Name("can").classList.remove("menuToggle"); */
    /* document.getElementById("navMenu").style.backgroundColor = "yellow"; */
}

document.getElementById("homeBtn").addEventListener("click", homeBtn);


function homeBtn(){
    /* document.getElementById("home").style.opacity = 1; */
}
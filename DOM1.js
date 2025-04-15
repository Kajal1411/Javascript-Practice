var HTitle=document.getElementById('name');
console.log(HTitle);
HTitle.textContent='Computer Courses';//it will change the content under id
HTitle.innerText='Pro Courses'; //it will change the content/text under id
HTitle.innerHTML='<h1>Pro</h1>'//can use to change html elements and content

//to change css style
HTitle.style.borderBottom='5px solid white';//1 way to change main header
var header=document.getElementById('Position');
header.style.borderBottom='3px solid white';
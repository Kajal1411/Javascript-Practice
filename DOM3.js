var li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent='PHP';
li[2].textContent='Python';
li[3].textContent='Ruby';
li[2].style.fontWeight="bold";
li[2].style.color="red";
li[2].style.backgroundColor="yellow";


for(var i=0;i<li.length;i++)
    {
        li[i].style.backgroundColor="Yellow";
        li[i].style.color="red";
    }
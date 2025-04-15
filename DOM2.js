var item=document.getElementsByClassName('list-item');
console.log(item);
item[1].textContent='PHP';
item[2].textContent='Python';
item[3].textContent='Ruby';
item[2].style.fontWeight="bold";
item[2].style.color="red";
item[2].style.backgroundColor="yellow";

for(var i=0;i<item.length;i++)
{
    item[i].style.backgroundColor="Yellow";
    item[i].style.color="red";
}
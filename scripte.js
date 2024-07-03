    let title=document.getElementById('title');
let price=document.getElementById('price');
let discount=document.getElementById('discount');
let taxes=document.getElementById('taxes');

let totale=document.getElementById('totale');
let count=document.getElementById('count');
let catigerie=document.getElementById('catigerie');

function gettotale(){
    let reselte=(+price.value + +taxes.value+ +ADS.value)- +discount.value;
    totale.innerHTML=reselte;
    totale.style.backgroundColor='green'
}


let det;
if(localStorage.product != null){
    det=JSON.parse(localStorage.product)
}
else{
    det=[];
}

function creation (){
let creation={
    title:title.value,
    price:price.value,
    discount:discount.value,
    taxes:taxes.value,
    ADS:ADS.value,
    totale:totale.innerHTML,
    count:count.value
}
for(let i=0;i<creation.count;i++){
    det.push(creation);
console.log(det)
localStorage.setItem('product',JSON.stringify(det))

}


clear()
showdata()
}
function clear(){
title.value='';
price.value='';
discount.value='';
taxes.value='';
ADS.value='';
totale.innerHTML='';
count.value='';

}
function showdata(){
    let tbale ='';
    for(let i=0;i<det.length;i++){
     tbale += ` <tr >
     <td>${i}</td>
     <td>${det[i].title}</td>
     <td>${det[i].price}</td>
     <td>${det[i].taxes}</td>
     <td>${det[i].ADS}</td>
     <td>${det[i].totale}</td>
     <td><button onclick="deletedata(${i})" id="DELETE">DELETE</button></td>
        <td><button id="UPDATE">UPDATE</button></td>

     
     </tr> `
    
       
    }
    document.getElementById('tbody').innerHTML=tbale;

let deleteall=document.getElementById('deletall')
if(det.length >0 ){
deleteall.innerHTML=`
<button onclick="deletall()">Delete All(${det.length})</button>

`
}
else{
    deleteall.innerHTML='';
    
}}

showdata()
function deletedata(i){ 
det.splice(i,1)
localStorage.product=JSON.stringify(det);
showdata();

}
function deletall(){
    localStorage.clear();
    det.splice(0)
    showdata();
    

}
    



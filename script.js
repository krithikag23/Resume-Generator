function addNewWEField() { 


 let newNode=document.createElement('textarea');    
 newNode.classList.add('form-control');
 newNode.classList.add('weField');
 newNode.classList.add("mt-2");
 newNode.setAttribute('rows',2);
 newNode.setAttribute("placeholder","Enter here");

 let weOb=document.getElementById("we");
 let weAddButtonOb=document.getElementById("weAddButton");


 weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){ 


    let newNode=document.createElement('textarea');    
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',2);
    newNode.setAttribute("placeholder","Enter here");
   
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
   
   
    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewSKField(){ 


    let newNode=document.createElement('textarea');    
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',2);
    newNode.setAttribute("placeholder","Enter here");
   
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");
   
   
    skOb.insertBefore(newNode,skAddButtonOb);
}

function generateResume(){

    let nameField= document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML= nameField;

    document.getElementById("contactT").innerHTML=document.getElementById
    ("contactField").value;

   document.getElementById("addressT").innerHTML=document.getElementById
   ("addressField").value;

   document.getElementById("emailT").innerHTML=document.getElementById
   ("emailField").value;

   document.getElementById("githubT").innerHTML=document.getElementById
   ("githubField").value;


   document.getElementById("linkedinT").innerHTML=document.getElementById
   ("linkedinField").value;


   document.getElementById("summaryT").innerHTML=document.getElementById
   ("summaryField").value;

   let wes= document.getElementsByClassName('weField');

   let str='';  
   
   for(let e of wes){
    str= str+ `<li> ${e.value} </li>`;
   }

   document.getElementById('weT').innerHTML= str;

   let aqs=document.getElementsByClassName('aqField');

   let str1='';

   for(let e of aqs){
    str1+= `<li> ${e.value} </li>`;
   }

   document.getElementById('aqT').innerHTML= str1;




   
}
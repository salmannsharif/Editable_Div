console.log('This is salman from index.js !!!!!');


let container = document.querySelector('.container');
let head = document.querySelector('.head');

// Crearting a editable div 

let divElem= document.createElement('div');
divElem.className="elem";
divElem.id="elem";
divElem.setAttribute('style','border:2px solid black; padding:10px 10px; ');


let data = localStorage.getItem('data');
let text;
if(data==null)
{
     text= document .createTextNode=`This is editable div , when you click'`;
}

else
{
    text= document.createTextNode(data); 
}





console.log(divElem)

container.insertBefore(divElem, head);


divElem.addEventListener('click',()=>{
    let noOfText= document.getElementsByClassName('textarea').length;
    if(noOfText==0)
    {
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea class="textarea" id="textarea">${html}</textarea>`;
    } 
    let textarea= document.getElementById('textarea');
    textarea.addEventListener('blur',()=>{
        elem.innerHTML= textarea.value;
        localStorage.setItem('data', elem.innerHTML);
        console.log(data)
    })
})

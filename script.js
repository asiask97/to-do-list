const addbutton = document.querySelector('.plus');
const ul = document.querySelector('ul');
const inputcontainer = document.querySelector('#inputcontainer');
const inputvalue = document.querySelector('.input');
const positioninput = document.querySelector('#positioninput')


addbutton.addEventListener('click', inputshow);

//popup input
function inputshow(){

    if (inputcontainer.classList.contains('inputcontainer1')){
        inputcontainer.classList.remove('inputcontainer1')
        inputcontainer.classList.add('inputcontainer')
    }else{
       inputcontainer.classList.remove('inputcontainer')
       inputcontainer.classList.add('inputcontainer1')
    }

}

function createElement(value){

    var textforlist = value;
    var input = document.createElement("li");
    input.className ='li';
    var addingvalue = document.createTextNode(textforlist);
    input.appendChild(addingvalue);
    
    //adding svg
    var span = document.createElement('span');
    span.setAttribute('class','delete');       
    var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');;
    svg.setAttribute('width', '17');
    svg.setAttribute('height', '18');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    path = document.createElementNS('http://www.w3.org/2000/svg',"path");  
    path.setAttribute('d', 'M13.166 11.023l-2.844-2.606 2.62-2.86a.86.86 0 00-.05-1.215l-.632-.579a.86.86 0 00-1.214.057l-2.62 2.86L5.58 4.075a.86.86 0 00-1.214.057l-.582.636a.86.86 0 00.05 1.214l2.844 2.605-2.62 2.861a.86.86 0 00.05 1.215l.632.579a.86.86 0 001.214-.057l2.62-2.86 2.844 2.605a.86.86 0 001.215-.057l.582-.636a.86.86 0 00-.05-1.214z');
    path.setAttribute('fill', '#ffffff');

    ul.appendChild(input);
    input.appendChild(span);
    span.appendChild(svg);
    svg.appendChild(path);
}


document.addEventListener('keypress', addtoLi);
function addtoLi(e){
    if (e.charCode === 13 && !inputvalue.value == ''){
       

        inputshow();
        createElement(inputvalue.value)
        //local stroage
        localStorage.setItem(inputvalue.value, inputvalue.value);
        
        // reset input text
        inputvalue.value='';

    }
}

ul.addEventListener('click', deletebutton);
function deletebutton(e){

    if( e.target.tagName === 'SPAN' ){
        console.log(e.target.parentElement.innerText)
      
      
        //removing from locla storge 
        for(var i=0, len=localStorage.length; i<len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];
            if(value == e.target.parentElement.innerText){
            
             localStorage.removeItem(key);
            }
        }
        

        //Removing parent element
        e.target.parentElement.remove()
    }   

}

function fromMemory(){
    
    
    
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        createElement(value)

    }

}

fromMemory();

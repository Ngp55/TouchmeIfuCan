var boxsource = document.querySelector('.box');

window.addEventListener('load', () =>{
    let i =Math.abs(Math.floor(Math.random()*window.innerWidth-55))
    let j = Math.abs(Math.floor(Math.random()*window.innerHeight-21));
  
    boxsource.style.left = i+'px';
    boxsource.style.top = j + "px";
     
    });


boxsource.addEventListener('click',function(){
    let i =Math.abs(Math.floor(Math.random()*window.innerWidth-55))
    let j = Math.abs(Math.floor(Math.random()*window.innerHeight-21));

    boxsource.style.left = i+'px';
    boxsource.style.top = j + "px";
    boxsource.style.textAlign="center";
    boxsource.innerText="You can't Catch me";
})
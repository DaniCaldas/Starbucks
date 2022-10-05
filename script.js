function imgSelect(event){
   const img = document.getElementById('image').src= event;
}

function colorSelect(c){
    const color = document.getElementById('circle')
    color.style.background = c
    color.style.transition='200ms'
}
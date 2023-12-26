const menu=document.getElementById('close');
const dropdown=document.getElementById('dropdown2');
const bar=document.getElementById('bar');
const cancel=document.getElementById('open');


function show(){
    if(dropdown.style.display='none'){
        dropdown.style.display='block';
    }
    else{
        dropdown.style.display='none';
    }
    cancel.style.display='block';
    bar.style.display='none';
}

function hide(){
    if(dropdown.style.display==='none'){
        dropdown.style.display='block';
        // marquee.style.display='none';
    }
    else{
        dropdown.style.display='none';
    }
    cancel.style.display='none';
    bar.style.display='block';
}





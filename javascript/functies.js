window.onload = init;

function init(){
    console.log('test');
    document.getElementById('hoger').addEventListener('click', nieuwGetal);
    document.getElementById('lager').addEventListener('click', nieuwGetal);
}

function nieuwGetal(event){
    event.preventDefault();
   
}
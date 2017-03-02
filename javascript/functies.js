window.onload = init;

var vorigGetal = null;
function init(){
    document.getElementById('hoger').addEventListener('click', nieuwGetal);
    document.getElementById('lager').addEventListener('click', nieuwGetal);
}

function nieuwGetal(){
    var display = document.getElementById('display');
    if (vorigGetal == null)
        {
            display.appendChild('<li>'+Math.floor(Math.random() *10)+'</li>');
        }
    else 
        {
            console.log(this);
        }
}
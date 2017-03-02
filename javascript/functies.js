window.onload = init;

var rand = Math.floor(Math.random() * 100 +1);
function init(){
    document.getElementById('gok').addEventListener('click', nieuwGetal);
}

function nieuwGetal(event){
    event.preventDefault();
    var input = document.getElementById('getal').value
    var output = document.getElementById('display');
    if (input > rand)
        {
            output.innerHTML = 'Lager';
        }
    else if (input < rand)
        {
            output.innerHTML = 'Hoger';
        }
    else if (input == rand)
        {
            output.innerHTML = 'Hoera gewonnen! Het getal was '+input;
        }
    else if (isNaN(input))
        {
            output.innerHTML = 'Geef een getal in foefelaar!';
        }
    else{
        output.innerHTML = "'T is kapot :'(";
    }
}
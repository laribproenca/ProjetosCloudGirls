var input = document.querySelector("input");
var button = document.querySelector("button");
var exchangeRate = 5.76; //Botar valor atualizado

button.addEventListener('click', function(event){

    event.preventDefault();
    var p = document.querySelector(".frase");

    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    
    const fetchQuotation = async function () {
        fetch('https://api.fastforex.io/fetch-one?api_key=9d8be536f5-7162ebe4cd-qr83kb&to=BRL', options)
                .then(response => response.json())
                .then(data => data.result.BRL)
                .catch(err => console.error(err));
    }

    const getQuotation = async function () {
        var DollarEmReais = await fetchQuotation();      
        console.log(DollarEmReais)
        var valorReal = exchangeRate * parseFloat(input.value);
        p.textContent = "O valor em real é R$ " +valorReal.toFixed(2);   
    }

    getQuotation();
})


    
 
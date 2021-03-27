<script>

    var input = document.querySelector("input");
    var button = document.querySelector("button");
    var DollarEmReais = 5.62; //Botar valor atualizado

    function exibeTexto(){
        var valorEmReal = DollarEmReais * parseFloat(input.value);
        document.write("O valor em real é " +valorEmReal);//colocar em formato de texto no html
    }
    
    button.onclick = exibeTexto;
    
</script>
function multiplicar(){
    var numeroDigitado = Number(document.getElementById('cTabu').value)
    
    if(!isNaN(numeroDigitado)){
        var tabela = document.createElement('table')
        
        for(var i = 1; i <= 10; i++){
            var resultado = numeroDigitado * i
            
            var linha = document.createElement('tr')
            var coluna1 = document.createElement('td')
            var coluna2 = document.createElement('td')

            coluna1.innerText = numeroDigitado + "x" + i + " ="
            coluna2.innerText =`${resultado}`

            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tabela.appendChild(linha)            
        }
        
        document.getElementById('cTabu').focus()
        document.getElementById('res').innerHTML= ''
        document.getElementById('res').appendChild(tabela);
    }
}
 
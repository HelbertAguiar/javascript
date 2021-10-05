const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const valorIMC = (peso / (altura * altura)).toFixed(1)

    if (nome !== '' && altura !== '' && peso !== '' ){
        resultado.textContent = 'tudo certo, seu imc eh: ' + valorIMC
    }else{
        resultado.textContent = 'preencha todos os campos';
    }

}

calcular.addEventListener('click', imc);
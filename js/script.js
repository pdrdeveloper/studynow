function calcular() {
    const mtf1 = document.getElementById('mtf1').value
    const mtf2 = document.getElementById('mtf2').value 
    const aviso = document.getElementById('aviso')
    const resultado = document.getElementById('resultado')
    const somaMedia = Number(mtf1.replace(',', '.')) + (Number(mtf2.replace(',', '.')) * 2);
    const calculoDosPesos = Number(28.75 - Number(somaMedia)) / 2;
    const media3 = String(calculoDosPesos.toFixed(2)) 
    const mediaFinal = String(media3.replace('.', ','));
    if (mtf1 == 0 || mtf2 == 0 || (mtf1 == 0 && mtf2 == 0)) {
        aviso.innerText = 'Por favor, preencha todos os campos!'
        aviso.style.color = 'white'
        aviso.style.fontWeight = '500'
        resultado.innerText = ``;
    } else {
        if (calculoDosPesos >= 10) {
            aviso.innerText = 'Você ficou na recuperação final!';
            aviso.style.color = '#ff3636'
            aviso.style.fontWeight = '500'
            aviso.style.paddingBottom = '12px'
            resultado.innerText = `Para dicas de estudo, deslize a tela.`;
        } else {
            aviso.style.color = 'white'
            aviso.style.fontWeight = '500'
            aviso.innerText = 'A nota miníma (com arredondamento) que você precisa tirar para passar é:';
            resultado.innerText = `${mediaFinal}`;
            resultado.style.fontSize = '36px'
            resultado.style.paddingTop = '12px'
        }
    }
    // alert('VALOR BRO: ' + mediaFinal)
}
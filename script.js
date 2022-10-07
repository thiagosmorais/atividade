function criaPaleta() {
    const getPallete = document.getElementById('color-palette');
    getPallete.style.display = 'flex';

    for (let index = 0; index < 4; index += 1) {
        const criaDivPaleta = document.createElement('div');
        criaDivPaleta.style.width = '40px';
        criaDivPaleta.style.height = '40px';
        criaDivPaleta.style.border = 'solid 1px black';
        criaDivPaleta.style.backgroundColor = 'rgb(0, 0, 0)';
        criaDivPaleta.className = 'color';
        criaDivPaleta.style.marginLeft = '5px';
        criaDivPaleta.id = index;
        getPallete.appendChild(criaDivPaleta);
    
    }
    return getPallete;

}

function criaCoresAleatorias (){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function pintaPaleta (){
    const colocaCor = document.getElementsByClassName('color')

    for (let index = 1; index <colocaCor.length; index += 1){
        colocaCor[index].style.backgroundColor = criaCoresAleatorias();
    }
    return colocaCor;
}

function criaQuadro() {
    const getQuadro = document.getElementById('pixel-board');
    getQuadro.style.width = '240px';
    getQuadro.style.paddingTop = '20px';
    getQuadro.style.marginLeft = '5px';
    for (let index = 0; index < 25; index += 1) {
        const criaDivPixel = document.createElement('div');
        criaDivPixel.style.width = '40px';
        criaDivPixel.style.height = '40px';
        criaDivPixel.style.border = 'solid 1px black';
        criaDivPixel.style.backgroundColor = 'rgb(255, 255, 255)';
        criaDivPixel.style.display = 'inline-block';
        criaDivPixel.className = 'pixel';
        criaDivPixel.id = index;
        getQuadro.appendChild(criaDivPixel);
    
    }
    return getQuadro;

}


// chamar funções
criaPaleta();
criaCoresAleatorias();
pintaPaleta();
console.log(pintaPaleta());
criaQuadro();



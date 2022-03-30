function criarTabuleiro(input){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('tabuleiro')

    container.innerHTML = `
        <div class="botao botao--green"></div>
        <div class="botao botao--yellow"></div>
        <div class="botao botao--red"></div>
        <div class="botao botao--blue"></div>
        <div class="infos">${input}</div>
    `

    main.appendChild(container)
}

criarTabuleiro()
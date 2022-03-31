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

function criarModal() {
    const main = document.querySelector('main')
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp')
    popUp.classList.add('show')
    main.appendChild(popUp)

    const popUpTitulo = document.createElement('h2')
    popUpTitulo.setAttribute('id', 'popUp_title')
    popUpTitulo.innerText = 'JOGO GENIUS'
    popUp.appendChild(popUpTitulo)

    const form = document.createElement('form')
    form.setAttribute('id', 'popUp_form')

    const input = document.createElement('input')
    input.id = 'input_name'

    const label = document.createElement('label')
    label.htmlFor = 'input_name';
    label.innerText = 'Insira seu nome aqui:';

    const button = document.createElement('button')
    button.setAttribute('id', 'popUp_button')
    button.innerText = 'Iniciar o jogo!';

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)
    popUp.appendChild(form)

}
criarModal()

const button = document.getElementById('popUp_button')
button.addEventListener('click', (e) => {
    e.preventDefault()
    
    const popUp = document.getElementById('popUp');
    const input = document.getElementById('input_name').value
    if (input === '') {
        console.log('Input vazio')
    } else {
        popUp.classList.add('hide')
        popUp.classList.remove('show')
        criarTabuleiro(input)
        adicionarEventosAosBotoes()
    }

})

/*
Gerar numero randomico
animar botao
adicionar o click nos botões

armazenar jogadas
verificar perda
*/

function gerarNumeroRandomico(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function animacao(botao, cor){
    botao.classList.add(`animacao${cor}`)
    setTimeout(function(){
        botao.classList.remove(`animacao${cor}`)
    },1000)
}

function animarBotao(botao, cor){
    setTimeout(function(){
        animacao(botao, cor)
    },1000)
}

function adicionarEventosAosBotoes(){
    const botoes = [...document.getElementsByClassName('botao')]
    console.log(botoes)
    botoes.forEach(function(elem){
        elem.addEventListener('click', function(e){
            const botao = e.target
            const corBotao = botao.classList[1].split('-')[2]
            animarBotao(botao, corBotao)
        })
    })
}



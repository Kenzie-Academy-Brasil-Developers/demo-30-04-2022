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
        //criarTabuleiro(input)
    }

})
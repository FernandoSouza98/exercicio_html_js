const form = document.getElementById('form-compare');
const numeroB = document.getElementById('number-B');
const numeroA = document.getElementById('number-A');

function validaNumero(numeroMaior,numeroMenor) {
        return numeroMaior > numeroMenor;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = `O número: <b>${numeroB.value}</b> é o maior número!`;
    formEValido = validaNumero(numeroB.value,numeroA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else{
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})
numeroB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value,numeroA.value)
    
    if (!formEValido) {
        numeroB.classList.add('error'); 
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error'); 
        document.querySelector('.error-message').style.display = 'none';
    }

});

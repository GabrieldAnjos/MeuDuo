
/**
 * Uses Regex for email check
 * @param {String} email 
 */
function is_email_valid(email) {

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}


$(document).ready(function () {

    //campos
    const email_field = $('form > #email')
    const nome_field = $('form > #nome')
    const idade_field = $('form > #idade')
    //btn enviar
    const btn_enviar = $('#btn_enviar')

    /**
     * Abilitar e Desabilitar o botão de envio de acordo com a validade dos campos
     */
    function btn_change() {
        if (email_field.is_valid && nome_field.is_valid && idade_field.is_valid) {
            btn_enviar.attr('disabled', false)
            btn_enviar.removeClass('curtaindown_blocked')
            btn_enviar.addClass('curtaindown')
        }
        else {
            btn_enviar.attr('disabled', true)
            btn_enviar.removeClass('curtaindown')
            btn_enviar.addClass('curtaindown_blocked')
        }
    }


    //mostra dica visual que o email está no formato errado e desabilida o envio
    email_field.on('input', () => {

        if (is_email_valid(email_field.val())) {
            email_field.removeClass('error')
            email_field.is_valid = true
        }
        else {
            email_field.addClass('error')
            email_field.is_valid = false
        }
        btn_change()
    })

    //mostra dica visual se o nome está vazio e desabilida o envio
    nome_field.on('input', () => {
        if (nome_field.val() != "") {
            nome_field.removeClass('error')
            nome_field.is_valid = true
        }
        else {
            nome_field.addClass('error')
            nome_field.is_valid = false
        }
        btn_change()
    })

    //mostra dica visual se a idade está entre 5 e 99 anos e desabilida o envio
    idade_field.on('input', () => {

        if (parseInt(idade_field.val()) > 5 && parseInt(idade_field.val()) < 99) {
            idade_field.removeClass('error')
            idade_field.is_valid = true
        }
        else {
            idade_field.addClass('error')
            idade_field.is_valid = false
        }
        btn_change()
    })



});
document.querySelector('#add-time')
.addEventListener("click", cloneField)

function cloneField() {
    // duplica os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function (field) {
        // pega o field do momento e limpa
        field.value = ""
    })

    // diz onde será colocado
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
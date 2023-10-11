const submit = document.querySelector('#btn')
const form = document.querySelector("#form")
const formX = document.querySelector("#form-1")
const exp = formX.querySelector("#exp")
submit.onclick = () => {
    form.style.display = "none"
    formX.style.display = "block"
}

exp.onchange = (e) => {
    let value = e.target.value
    submit.onclick = () => {
        if (value) {
            alert("Payment successfull")
        }
    }
}
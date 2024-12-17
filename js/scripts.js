let elements = document.querySelectorAll("#required-field input, #required-field textarea")
let btnSubmit = document.getElementById("btn-submit")
let form = document.querySelector("form")

elements.forEach(input =>{
    input.addEventListener("change", ()=>{
        let warning = input.nextElementSibling

        if(input.value.trim() !== "") {
            input.classList.remove("input-error")
            input.classList.add("input-preenchido")
            if(warning && warning.classList.contains("warning")) {
                warning.innerHTML = ""
            }
        }
    })
})

btnSubmit.addEventListener("click", (e)=>{

    e.preventDefault()
    let valid = true

    elements.forEach(input => {
        let warning = input.nextElementSibling

        if(input.value.trim() === "") {
            input.classList.add("input-error")
            valid = false
            if(warning && warning.classList.contains("warning")){
                warning.innerHTML = "campo obrigatório*"
            }
        } else {
            input.classList.remove("input-error")
            if(warning && warning.classList.contains("warning")){
                warning.innerHTML = ""
            }
        }
    })

    if (valid) {
        form.submit()
    }
})
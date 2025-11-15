const itens = [
  "Milk",
  "Eggs",
];

const ul = document.querySelector("main ul")
const input = document.querySelector("input")
const form = document.querySelector("form")
const alertBox = document.querySelector(".alert")
const btnAlert = document.querySelector(".btnAlert")

function newItem(text) {
  const li = document.createElement("li")
  const checkbox = document.createElement("input")
  const textSpan = document.createElement("span")
  const trashIcon = document.createElement("i")
  

  checkbox.type = "checkbox"
  checkbox.name = "checkbox"

  textSpan.textContent = text

  trashIcon.classList.add("hgi-stroke", "hgi-delete-03")
  li.classList.add("li-hero")

  li.appendChild(checkbox)
  li.appendChild(textSpan)
  li.appendChild(trashIcon)

  trashIcon.addEventListener("click", () => {
    li.remove()
    showAlert()
  })
  

  return li
}

itens.forEach(item => ul.appendChild(newItem(item)))

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const value = input.value.trim()
  if (!value) return   

  ul.appendChild(newItem(value))

  input.value = ""    
})

function showAlert(){
  alertBox.classList.remove("hidden")
  setTimeout(() => {
  alertBox.classList.add("hidden")
},2000)
  }

btnAlert.addEventListener("click",() => {
  alertBox.classList.add("hidden")
})




 










  


const dogsURL = 'http://localhost:3000/dogs'

const tableContainer = dcoument.getElementById('table-body')

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs() {
    fetch(dogsURL).then(resp => resp.json()).then(response => {
        response.forEach(dog => {
            newPotato = tableRowMaker(dog)
            hotPotato = addDogToElement(dog, newPotato)
            tableContainer.append( hotPotato )
        })
    })
}

function tableRowMaker(dog) {
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdBreed = document.createElement('td')
    const tdSex = dcoument.createElement('td')
    const tdButton = document.createElement('td')
    const button = document.createElement('button')
    button.style.width = "100%"
    button.textContent = "Edit"
    tdButton.append(button)
    button.addEventListener('click', () => buttonClick(dog))
    tr.append(tdName, tdBreed, tdSex, tdButton)
    return tr
}

constAddDogToElement = (dog, element) => {
    const elements = element.querySelectorAll('td')
    elements[0].textContent = dog.name
    elements[1].textContent = dog.breed
    elements[2].textContent = dog.sex
    return element
}



function buttonClick(dog) {
    const form = document.getElementById('dog-form')
    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex
    console.log(form)
}

function updateDogHandler(e) {
  e.preventDefault();
  let dogID = e.target.name.dataset.id;
  let dogName = e.target.name.value;
  let dogBreed = e.target.breed.value;
  let dogSex = e.target.sex.value;
​
  fetch(`http://localhost:3000/dogs/${dogID}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", "Accept": "appliation/json" },
    body: JSON.stringify({ name: dogName, breed: dogBreed, sex: dogSex })
  })
  
  window.location.reload();
}
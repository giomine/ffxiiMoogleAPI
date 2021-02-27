fetch('https://www.moogleapi.com/api/v1/characters/search?origin=xii')
.then(res => res.json())
.then(data => {
    data.forEach((char) => {
    console.log(char.pictures[0].url + " Name: " + char.name + ", Origin: " + char.origin + ", About: " + char.description)  

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const image = document.createElement('img');
    image.src = char.pictures[0].url

    const imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'imageContainer')

    const name = document.createElement('h2');
    name.textContent = char.name;

    const origin = document.createElement('p');
    origin.textContent = char.origin;

    const description = document.createElement('p');
    description.textContent = char.description;

    container.appendChild(card)
    card.appendChild(imageContainer)
    imageContainer.appendChild(image)
    card.appendChild(name)
    card.appendChild(origin)
    card.appendChild(description)
})
})
    .catch(error => {
        console.log(error)
})


const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)
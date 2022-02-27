const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))


}

const displayDog = (doglist) => {


    const main = document.getElementById("main")

    const firstTenData = doglist.slice(0, 10)

    for (const dog of firstTenData) {

        console.log(firstTenData)
        const div = document.createElement("div")
        console.log(dog.image.url)
        div.className = "col-lg-4"
        div.innerHTML = `<h2>${dog.name}</h2> <p>${dog.weight.imperial}</p>   <p>${dog.temperament} </p>    <img width="400px" heigt="250px"  src="${dog.image.url}" /> `

        main.appendChild(div)
    }


}
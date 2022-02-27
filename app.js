const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))


}

const displayDog = (doglist) => {


    const main = document.getElementById("main")

    const firstTenData = doglist.slice(0, 10)
    const div = document.createElement("div")
    for (const dog of firstTenData) {
        console.log(dog.name)
        div.innerHTML = `<h2>${dog.name} </h2>`
    }


}
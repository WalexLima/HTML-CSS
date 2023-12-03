const filter = document.querySelector('.display-grid')

const constructionGrid =()=>{
    for (let cont =0; cont < 9; cont++) {
        const carro = document.createElement('div')
        carro.classList.add('display-grid')
        carro.innerHTML += `
        <div class="card">
            <img src="img/car-card.png" alt="Car" />
            <div class="card-content">
            <h3>Audi Supra TT</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus.
            </p>
            <button type="button" class="buttonBlack">I want this!</button>
        </div>
        `
        filter.appendChild(carro)
    }
}

constructionGrid()
console.log(filter)
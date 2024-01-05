function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
    
    results
        .then(response => response.json())
        .then(data => { 
            done(data)
        });
}

getCharacters(data => { 
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personajes"/>
            </div>

            <h2>Personaje: ${personaje.name}</h2>
            <span>Status: ${personaje.status}</span>
            </br>
            <span>Genero: ${personaje.gender}</span>
        </article>
        `);

        const main = document.querySelector("main");
        main.append(article);
    });
}); 
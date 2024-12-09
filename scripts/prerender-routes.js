( async ()=> {
    const fs = require('fs')
    const pokeIds = Array.from({length: 10}, (_, i) => i + 1)

    let fileContent = pokemonIds.map( id => `/pokemon/${id}`).join('\n');
    console.log(fileContent)

    fs.writeFileSync('routes.txt', fileContent)
})
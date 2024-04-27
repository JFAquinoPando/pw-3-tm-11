listaClubes = [
    {
        nombre: "Olimpia"
    },
    {
        nombre: "Cerro Porteño"
    },
    {
        nombre: "Luque"
    },
    {
        nombre: "Ameliano"
    }
]

/* Filter  ----------> Filtar elementos */
clubesConO = listaClubes.filter((club)=>{
    return club.nombre.includes("o")
})

console.log("Clubes con la letra o (en minuscula)", clubesConO);

/* Map ----> Mapea o devuelve nueva estructura usando los datos */

const mapClubes = listaClubes.map((club)=>{
    club.copas = club.nombre.includes("O") ? 3 : 0
    club.nombre = "Club " + club.nombre 
    return club
})

console.warn("Listado de clubes usando MAP", mapClubes);
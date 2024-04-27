const listadoClubes = document.querySelector("#clubes")
console.log(listadoClubes.children);
console.log(Array.from(listadoClubes.children));
const arrayDeClubes = Array.from(listadoClubes.children)

const listadoACopas = arrayDeClubes.filter(function (club) {
   return club.value >= 49
})

console.warn(listadoACopas);


const divACopas = document.createElement("div")
divACopas.insertAdjacentHTML("afterbegin",
                              "<h3>Van a Copas Internacionales</h3>")




divACopas.insertAdjacentText("beforeend", listadoACopas.map(function (club) {
   console.log("Estoy mapeando el club: ",club.textContent);
   return club.textContent
}).join(", "))

const divRoot = document.querySelector("#root")

divRoot.insertAdjacentElement("beforeend", divACopas)
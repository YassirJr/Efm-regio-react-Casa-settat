export const ajouterVille = (ville, codePays) => {
    return { type: "ajouter-ville", payload: { ville, codePays } }
}
export const modifierPopulation = (population, codePays) => {
    return { type: "modifier-population", payload: { population, codePays } }
}
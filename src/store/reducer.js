const initState = {
    pays: [
        {
            codePays: "MA",
            nomPays: "Maroc",
            continent: "Afrique",
            surface: "446550",
            imgUrl:
                "https://i.pinimg.com/originals/c4/f7/f2/c4f7f2a90d1613493471e397eeda544f.jpg",
            anneeIndependance: "1956",
            population: "37000000",
            villes: [
                {
                    nomVille: "Rabat",
                    district: "Rabat-Salé-Kénitra",
                    population: "650,000",
                    capitale: true,
                },
                {
                    nomVille: "Casablanca",
                    district: "Casablanca-Settat",
                    population: "3,500,000",
                    capitale: false,
                },
                {
                    nomVille: "Marrakech",
                    district: "Marrakech-Safi",
                    population: "1,000,000",
                    capitale: false,
                },
            ],
        }, {
            codePays: "ZL",
            nomPays: "Zylvania",
            continent: "Europe",
            surface: 80000,
            imgUrl:
                "https://thumbs.dreamstime.com/z/transylvanian-flag-sony-dsc-transylvania-s-national-45174482.jpg",
            anneeIndependance: 1945,
            population: 1000000,
            villes: [
                {
                    nomVille: "Metropole",
                    district: "Centre",
                    population: 500000,
                    capitale: true,
                },
                {
                    nomVille: "Ville Soleil",
                    district: "Sud",
                    population: 200000,
                    capitale: false,
                },
                {
                    nomVille: "Porto del Mar",
                    district: "Ouest",
                    population: 150000,
                    capitale: false,
                },
            ],
        },
    ]
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ajouter-ville":
            const { ville, codePays } = action.payload;
            const countryIndex = state.pays.findIndex(c => c.codePays === codePays);
            if (countryIndex === -1) {
                return state;
            }
            const updatedCountries = [...state.pays];
            updatedCountries[countryIndex] = {
                ...updatedCountries[countryIndex],
                villes: [...updatedCountries[countryIndex].villes, ville]
            };
            return { ...state, pays: updatedCountries };
        case "modifier-population":
            const { population } = action.payload;
            const codeP = action.payload.codePays
            return {
                ...state, pays: state.pays.map(pays => {
                    if (pays.codePays === codeP) {
                        return { ...pays, population: population };
                    } else {
                        return pays;
                    }
                })
            };
        default:
            return state
    }
}
class CocktailService {
    constructor() {
        this.path = 'https://www.thecocktaildb.com/api/json/v1/1'
    }

    getUrl(url) {
        return fetch(url)
                .then(data => data.json())
                .then(json => json.drinks )
    }

    randomCocktail() {
        return this.getUrl(`${this.path}/random.php`)
            .then(arr => this.objTransform(arr[0]))
    }

    byFirstLetter(letter) {
        return this.getUrl(`${this.path}/search.php?f=${letter}`)
            .then(arr => arr.map( obj => this.objTransform(obj) ))
    }

    objTransform(obj) {
        let arr = Object.entries(obj).filter(([prop, val]) => prop.includes("strIngredient") && val != null ).map(arr => arr[1])

        return {
            id: obj.idDrink,
            cat:  obj.strAlcoholic,
            sub: obj.strCategory,
            name: obj.strDrink,
            img: obj.strDrinkThumb,
            glass: obj.strGlass,
            desc: obj.strInstructions,
            ingr: arr
        }
    }
}

export default CocktailService
import { useEffect, useState } from 'react'
import CocktailService from '../services/cocktail'

function Random() {
    let cocktails = new CocktailService()
    const [rand, setRand] = useState({})

    useEffect( () => {
        cocktails.randomCocktail().then(obj => setRand(obj))
    }, [] )
    
    let {cat, sub, name, img, glass, desc, ingr=[]} = rand
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h5 className="card-title">{cat}: {sub}</h5>
                        <ul>
                            {ingr.map( (ing, i) => <li key={i}>{ing}</li>) }
                        </ul>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">Glass: {glass}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Random
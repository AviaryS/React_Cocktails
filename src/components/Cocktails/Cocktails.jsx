import React, {useEffect, useState} from 'react';

function Cocktails({login, order, setOrder}) {
    const [cocktails, setCocktails] = useState([]);


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
            .then((response) => response.json())
            .then((json) => setCocktails(json['drinks']));
    }, []);

    const addToOrder = (cocktail) => {
        const item = {
            strDrink: cocktail.strDrink,
            strDrinkThumb: cocktail.strDrinkThumb,
            idDrink: cocktail.strDrink,
        };
        setOrder([...order, item])
    }

    return (
        <div>
            {cocktails.map((cocktail) => {
                return (
                    <div key={cocktail.idDrink}>
                        <img src={cocktail.strDrinkThumb} />
                        <p>{cocktail.strDrink}</p>
                        {login &&
                            <>
                                <button
                                    onClick={() => addToOrder(cocktail)}
                                >
                                    Добавить в заказ
                                </button>
                            </>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default Cocktails;
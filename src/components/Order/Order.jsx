import React from 'react';

function Order({order, setOrder}) {

    const removeItem = (item) => {
        setOrder(order.filter((x) => x.idDrink !== item.idDrink));
    };

    return (
        <div>
            {order.map((item) => {
                return (
                    <div key={item.idDrink}>
                        <div>
                            <img src={item.strDrinkThumb}/>
                            <p>{item.strDrink}</p>
                        </div>
                        <button
                            onClick={() => removeItem(item)}
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Order;
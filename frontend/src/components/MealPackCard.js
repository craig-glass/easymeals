import React from 'react';


export const MealPackCard = (props) => {
    return (
        <div className='Mealpackcard'>
            <h3>{props.item.name}</h3>
            <p>{props.item.calories}</p>
            <p>{props.item.price}</p>
            <p>{props.item.description}</p>
        </div>
    )
}
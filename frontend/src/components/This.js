import React from 'react';
import {MealPackCard} from "./MealPackCard";


export const This = (props) => {


    return (
        <div className="Mealpackcards">
            {props.mealpacks.map(item => (
                <MealPackCard item={item}></MealPackCard>
            ))}
        </div>
    )
}
import React, { useState } from 'react'
import './Recipelist.css'
import Popup from './Popup'


const Recipelist = (props) => {
    console.log("props", props);
    const { recipeObject } = props;
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <div className="recipe-container">
            <div className="image">
                <img src={recipeObject.image} alt=""/>
                <h2>{recipeObject.label}</h2>
                <p>{recipeObject.mealType}</p>
                {/* <p>{recipeObject.dietLabels[0]}  {recipeObject.dietLabels[1]}</p> */}
            </div>
            <div className="ingredients" onClick={togglePopup}>
                <p>Ingredients</p>
                {isOpen && <Popup 
                content={<>
                    <h2 className='head'>Ingredients</h2>
                    <ul>
                        {recipeObject.ingredientLines.map((ingredient, index) => (
                            <li key={index}>- {ingredient}</li>
                        ))}
                    </ul>
                </>}
                // handleClose={togglePopup}
            />}
            </div>
            <div className="complete" onClick={() => window.open(recipeObject.url)}>
                <p>See complete recipe</p>
            </div>
        </div>
    </>
  )
}

export default Recipelist
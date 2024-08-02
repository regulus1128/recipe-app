import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import search from './search.png'
import food from './fast-food.png'
import Recipelist from '../components/Recipelist'


const Header = () => {

    const APP_ID = "af1771f3";
    const APP_KEY = "38b1ab8eb37d9f6221861ae1069e236f";
    const inputRef = useRef();
    const [recipeList, setRecipeList] = useState([]);
  
    async function searchRecipe(recipe){
      try{
        if(recipe === ""){
            alert('Please enter a recipe');
            return;
        }
        const url = `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setRecipeList(data.hits);
      }
      catch{
        alert("Recipe not found!");
        console.log(error);
      }
    }

    useEffect(() => {
        searchRecipe("");
      }, [])
 
  return (
    <>
        <div className="header">
            <div className="logo">
                <img src={food} width="42px" height="42px"/>
                <p>RECIPIOSA</p>
            </div>
            <div className="search">
                    <input type="text" ref={inputRef} placeholder='Search recipes...'/>
                    <div className="img">
                    <img src={search} width="30px" height="30px" className="search-icon" onClick={() => searchRecipe(inputRef.current.value)}/>
                </div>
            </div>
        </div>
        <div className="main">
            
        {recipeList.length > 0 
                    ? recipeList.map((recipeObject, index) => (
                        <Recipelist key={index} recipeObject={recipeObject.recipe} />
                    ))
                    : <p className='no-recipe'>No recipes found</p>
                }
      </div>
        
    </>
  )
}

export default Header
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header'
import Header from './Header'

function App() {

  const [ingredients, setIngredients] = useState([])
  const ingredientListItems = ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <>
      <Header/>
      <main>
        <form className="add-ingredient-form" action={addIngredient}>
          <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>
        {ingredients.length > 0 && <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>}
      </main>
    </>
  )
}

export default App

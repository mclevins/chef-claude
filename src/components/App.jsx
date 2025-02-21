import { useState } from 'react'
import './App.css'
import './Header'
import Header from './Header'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

function App() {

  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipeShown, setRecipeShown] = useState(false)

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
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
        {ingredients.length > 0 && <IngredientsList 
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}        
        />}
        {recipeShown && <ClaudeRecipe />}
      </main>
    </>
  )
}

export default App

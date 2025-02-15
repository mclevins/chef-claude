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
          <button>Add Ingredients</button>
        </form>
        <ul>
          {ingredientListItems}
        </ul>
      </main>
    </>
  )
}

export default App

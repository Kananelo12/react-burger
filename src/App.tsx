import { useState } from "react";
import "./App.css";
import Burger from "./components/Burger";
import IngredientControl from "./components/IngredientControl";

// Updated interface to use numbers instead of booleans
interface Ingredients {
  tomato: number;
  meat: number;
  lettuce: number;
}

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({
    tomato: 1,
    meat: 1,
    lettuce: 1,
  });

  // Function to increase ingredient count
  const increaseIngredient = (ingredient: keyof Ingredients) => {
    setIngredients((prev) => ({
      ...prev,
      [ingredient]: prev[ingredient] + 1,
    }));
  };

  // Function to decrease ingredient count
  const decreaseIngredient = (ingredient: keyof Ingredients) => {
    setIngredients((prev) => ({
      ...prev,
      [ingredient]: Math.max(0, prev[ingredient] - 1),
    }));
  };

  const getTotalIngredients = () => {
    return ingredients.tomato + ingredients.meat + ingredients.lettuce;
  };

  const ingredientConfigs = [
    {
      key: 'tomato' as keyof Ingredients,
      name: 'tomato',
      emoji: '🍅',
      color: 'bg-red-500'
    },
    {
      key: 'meat' as keyof Ingredients,
      name: 'meat',
      emoji: '🥩',
      color: 'bg-amber-700'
    },
    {
      key: 'lettuce' as keyof Ingredients,
      name: 'lettuce',
      emoji: '🥬',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            🍔 Burger Builder
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Build your perfect burger, layer by layer!
          </p>
          <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-semibold">
              Total ingredients: {getTotalIngredients()}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🎛️ Customize Your Burger
            </h2>
            
            {ingredientConfigs.map(({ key, name, emoji, color }) => (
              <IngredientControl
                key={key}
                name={name}
                emoji={emoji}
                count={ingredients[key]}
                onIncrease={() => increaseIngredient(key)}
                onDecrease={() => decreaseIngredient(key)}
                color={color}
              />
            ))}

            <div className="ingredient-control text-center">
              <button
                onClick={() => setIngredients({ tomato: 0, meat: 0, lettuce: 0 })}
                className="control-button w-full py-3 px-6 rounded-lg bg-gray-600 hover:bg-gray-700 active:bg-gray-800 font-semibold text-white"
              >
                🗑️ Clear All
              </button>
            </div>
          </div>

          {/* Burger Display */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🍔 Your Masterpiece
            </h2>
            <Burger ingredients={ingredients} />
            
            {getTotalIngredients() === 0 && (
              <div className="mt-6 text-center">
                <p className="text-white/80 text-lg font-medium">
                  Your burger looks a bit empty! 😅
                </p>
                <p className="text-white/60">
                  Add some ingredients to make it delicious!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
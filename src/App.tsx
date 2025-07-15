import { useState } from "react";
import "./App.css";

const TopBread = () => <div className="pad bg-amber-500 rounded-t-2xl">Top Bread</div>;
const Tomato = () => <div className="pad bg-red-600">Tomato</div>;
const Meat = () => <div className="pad bg-[#8B3C2D]">Meat</div>;
const Lettuce = () => <div className="pad bg-green-500">Lettuce</div>;
const BaseBread = () => <div className="pad bg-amber-500 rounded-b-2xl">Base Bread</div>;

// forming the structure of ingredients
interface Ingredients {
  tomato: boolean;
  meat: boolean;
  lettuce: boolean;
}

interface BurgerProps {
  ingredients: Ingredients;
}
const Burger = ({ ingredients }: BurgerProps) => {
  return (
    <div className="mx-auto w-64 text-center">
      <TopBread />
      {ingredients.tomato && <Tomato />}
      {ingredients.meat && <Meat />}
      {ingredients.lettuce && <Lettuce />}
      <BaseBread />
    </div>
  );
};

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({
    tomato: false,
    meat: true,
    lettuce: false,
  });

  // Ingredient Toggle function
  const toggleIngredient = (ingredient: keyof Ingredients) => {
    setIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="content">
        <h2 className="text-2xl font-semibold pb-5">ACA React Burger</h2>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.25rem',
        }}>
          {(Object.keys(ingredients) as Array<keyof Ingredients>).map(
            (ingredient) => (
              <button
                key={ingredient}
                onClick={() => toggleIngredient(ingredient)}
                className="px-2 py-1 border rounded"
              >
                {ingredients[ingredient] ? `Hide ${ingredient}` : `Show ${ingredient}`}
              </button>
            )
          )}
        </div>

        <div className="">
          <Burger ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default App;

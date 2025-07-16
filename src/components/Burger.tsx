import React from 'react';
import BurgerLayer from './BurgerLayer';

interface Ingredients {
  tomato: number;
  meat: number;
  lettuce: number;
}

interface BurgerProps {
  ingredients: Ingredients;
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const renderLayers = () => {
    const layers = [];
    
    // Rendering the top bread layer first
    layers.push(<BurgerLayer key="top-bread" type="topBread" />);
    
    // Add ingredients in order: tomato, meat, lettuce
    // Tomate
    for (let i = 0; i < ingredients.tomato; i++) {
      layers.push(<BurgerLayer key={`tomato-${i}`} type="tomato" index={i} />);
    }
    
    // Meat
    for (let i = 0; i < ingredients.meat; i++) {
      layers.push(<BurgerLayer key={`meat-${i}`} type="meat" index={i} />);
    }
    
    // Lettuce
    for (let i = 0; i < ingredients.lettuce; i++) {
      layers.push(<BurgerLayer key={`lettuce-${i}`} type="lettuce" index={i} />);
    }
    
    // Always end with base bread
    layers.push(<BurgerLayer key="base-bread" type="baseBread" />);
    
    return layers;
  };

  return (
    <div className="burger-container">
      <div className="mx-auto w-80 text-center">
        {renderLayers()}
      </div>
    </div>
  );
};

export default Burger;
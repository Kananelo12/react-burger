import React from 'react';

interface BurgerLayerProps {
  type: 'topBread' | 'tomato' | 'meat' | 'lettuce' | 'baseBread';
  index?: number;
}

const layerEmojis = {
  topBread: '🍞',
  tomato: '🍅',
  meat: '🥩',
  lettuce: '🥬',
  baseBread: '🍞'
};

const layerNames = {
  topBread: 'Top Bun',
  tomato: 'Fresh Tomato',
  meat: 'Juicy Patty',
  lettuce: 'Crisp Lettuce',
  baseBread: 'Bottom Bun'
};

const BurgerLayer: React.FC<BurgerLayerProps> = ({ type, index }) => {
  const getLayerClass = () => {
    switch (type) {
      case 'topBread':
        return 'ingredient-layer top-bread';
      case 'tomato':
        return 'ingredient-layer tomato';
      case 'meat':
        return 'ingredient-layer meat';
      case 'lettuce':
        return 'ingredient-layer lettuce';
      case 'baseBread':
        return 'ingredient-layer base-bread';
      default:
        return 'ingredient-layer';
    }
  };

  return (
    <div className={`${getLayerClass()} bounce-in`}>
      <span className="mr-2 text-lg">{layerEmojis[type]}</span>
      {layerNames[type]}
      {index !== undefined && index > 0 && (
        <span className="ml-2 text-sm opacity-75">#{index + 1}</span>
      )}
    </div>
  );
};

export default BurgerLayer;
import React from 'react';

interface IngredientControlProps {
  name: string;
  emoji: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  color: string;
}

const IngredientControl: React.FC<IngredientControlProps> = ({
  name,
  emoji,
  count,
  onIncrease,
  onDecrease,
  color
}) => {
  return (
    <div className="ingredient-control">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{emoji}</span>
          <span className="font-semibold text-gray-800 capitalize">{name}</span>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${color}`}>
          {count}
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={onDecrease}
          disabled={count === 0}
          className={`control-button flex-1 py-2 px-4 rounded-lg font-semibold text-white transition-all ${
            count === 0 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-red-500 hover:bg-red-600 active:bg-red-700'
          }`}
        >
          − Remove
        </button>
        
        <button
          onClick={onIncrease}
          className="control-button flex-1 py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 font-semibold text-white"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default IngredientControl;
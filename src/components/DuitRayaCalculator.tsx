'use client';

import { useState } from 'react';
import ConfettiAnimation from './ConfettiAnimation';
const DuitRayaCalculator = () => {

  const [denominations, setDenominations] = useState([
    { id: 1, value: 100, count: 0, color: 'bg-indigo-200', image: '100' },
    { id: 2, value: 50, count: 0, color: 'bg-emerald-200', image: '50' },
    { id: 3, value: 20, count: 0, color: 'bg-amber-200', image: '20' },
    { id: 4, value: 10, count: 0, color: 'bg-pink-200', image: '10' },
    { id: 5, value: 5, count: 0, color: 'bg-green-200', image: '5' },
    { id: 6, value: 1, count: 0, color: 'bg-blue-200', image: '1' },
  ]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = denominations.reduce(
      (total, denom) => total + denom.value * denom.count,
      0
    );
    setShowConfetti(newTotal > 500);
    setTotal(newTotal);
    return newTotal;
  };

  const handleIncrement = (id: number) => {
    setDenominations(
      denominations.map((denom) =>
        denom.id === id ? { ...denom, count: denom.count + 1 } : denom
      )
    );
    calculateTotal();
  };

  const handleDecrement = (id: number) => {
    setDenominations(
      denominations.map((denom) =>
        denom.id === id && denom.count > 0
          ? { ...denom, count: denom.count - 1 }
          : denom
      )
    );
    calculateTotal();
  };

  const resetAll = () => {
    setDenominations(
      denominations.map((denom) => ({ ...denom, count: 0 }))
    );
    setTotal(0);
    setShowConfetti(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Kira Duit Raya</h1>

      <div className="space-y-4">
        {denominations.map((denom) => (
          <div key={denom.id} className="flex items-center justify-between">
            <button
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl"
              onClick={() => handleDecrement(denom.id)}
            >
              -
            </button>

            <div className={`flex items-center ${denom.color} px-4 py-2 rounded-md w-24 justify-center`}>
              <div className="w-4 h-4 bg-red-300 rounded-full mr-1"></div>
              <span>RM{denom.value}</span>
            </div>

            <div className="text-center w-16">
              <span>x</span>
              <span className="mx-2">{denom.count}</span>
            </div>

            <button
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl"
              onClick={() => handleIncrement(denom.id)}
            >
              +
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="mb-2">Jumlah:</div>
        <div className="text-2xl font-bold mb-4">
          RM{total}
        </div>

        <div className="text-4xl mb-4">
          {total < 20 ? '😐' : total > 500 ? '😊' : '🥹'}
        </div>
        {showConfetti && <ConfettiAnimation />}
        <div className="flex justify-center gap-4">
          <button
            onClick={resetAll}
            className="px-4 py-2 bg-gray-100 rounded-md text-sm"
          >
            semula
          </button>

        </div>
      </div>
    </div>
  );
};

export default DuitRayaCalculator;
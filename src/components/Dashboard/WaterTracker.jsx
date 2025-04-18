import React, { useState } from 'react';

const WaterTracker = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const presetAmounts = [100, 200, 300, 500]; // ml

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Water Amount:', waterAmount, 'ml');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Log Water Intake</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Water Amount Display */}
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-blue-400 mb-2">
              {waterAmount} ml
            </div>
            <div className="text-gray-400">Today's Entry</div>
          </div>

          {/* Quick Add Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setWaterAmount(prev => prev + amount)}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center space-x-2 transition duration-200"
              >
                <span className="text-xl">💧</span>
                <span>+{amount}ml</span>
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Custom Amount (ml)</label>
            <div className="flex space-x-4">
              <input
                type="number"
                value={waterAmount}
                onChange={(e) => setWaterAmount(Number(e.target.value))}
                className="flex-1 bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
                min="0"
                step="50"
              />
              <button
                type="button"
                onClick={() => setWaterAmount(0)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 rounded-lg"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Save Water Intake
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaterTracker; 
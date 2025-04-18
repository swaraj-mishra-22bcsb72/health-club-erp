import React from 'react';

const LastWorkout = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Last workout</h2>
        <span className="text-gray-400">Evening paced walk</span>
      </div>

      <div className="flex items-center mb-4">
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-2">🚶‍♂️</span>
          <span>16 Apr • 21:01 • 1h 1m</span>
        </div>
        <div className="flex items-center text-emerald-400 ml-4">
          <span className="mr-1">❤️</span>
          <span>57 pts</span>
        </div>
      </div>

      {/* Map placeholder - in a real app, you would integrate with a mapping service */}
      <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gray-900 opacity-50" />
      </div>
    </div>
  );
};

export default LastWorkout; 
import React from 'react';

const DailyGoals = () => {
  const days = ['F', 'S', 'S', 'M', 'T', 'W', 'T'];
  const completedDays = [0, 1, 2, 3, 4, 5]; // Indexes of completed days

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white text-lg font-semibold">Your daily goals</h2>
          <p className="text-gray-400 text-sm">Last 7 days</p>
        </div>
        <div className="text-blue-400 text-xl font-bold">
          4/7
          <span className="text-gray-400 text-sm ml-1">Achieved</span>
        </div>
      </div>
      
      <div className="flex justify-between">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                ${completedDays.includes(index) 
                  ? 'bg-emerald-400 text-gray-900' 
                  : 'bg-gray-700 text-gray-400'}`}
            >
              <span className="text-sm">{day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyGoals; 
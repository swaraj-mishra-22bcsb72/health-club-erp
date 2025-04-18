import React from 'react';
import PropTypes from 'prop-types';

const WeeklyTarget = ({ achieved, target }) => {
  const percentage = Math.min((achieved / target) * 100, 100);
  
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-lg font-semibold">Your weekly target</h2>
        <span className="text-gray-400 text-sm">14-20 Apr</span>
      </div>

      <div className="text-2xl font-bold text-emerald-400 mb-2">
        {achieved} of {target}
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-700 rounded-full mb-4">
        <div 
          className="h-full bg-emerald-400 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center">
        <p className="text-gray-400 text-sm flex-1">
          Great work! Scoring at least {target} Heart Points each week helps you stay fit and healthy.
        </p>
        <img 
          src="/who-logo.png" 
          alt="WHO Logo" 
          className="w-10 h-10 ml-4"
        />
      </div>
    </div>
  );
};

WeeklyTarget.propTypes = {
  achieved: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired
};

export default WeeklyTarget; 
import React from 'react';
import PropTypes from 'prop-types';

const CircularProgress = ({ value, maxValue, color, label, size }) => {
  const percentage = (value / maxValue) * 100;
  const radius = size === 'large' ? 60 : 45;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorClasses = {
    emerald: 'stroke-emerald-400 text-emerald-400',
    blue: 'stroke-blue-400 text-blue-400'
  };

  return (
    <div className="flex flex-col items-center justify-center w-36 h-36">
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#2D3748"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className={colorClasses[color].split(' ')[0]}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-2xl font-bold ${colorClasses[color].split(' ')[1]}`}>
            {value}
          </span>
          <span className="text-sm text-gray-400">{label}</span>
        </div>
      </div>
    </div>
  );
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['emerald', 'blue']).isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'medium']).isRequired
};

export default CircularProgress; 
import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ value, unit, label, icon }) => (
  <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
    <span className="text-2xl mb-1">{icon}</span>
    <div className="text-2xl font-bold text-white">{value}{unit}</div>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

const DailyStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <StatCard
        value={stats.calories}
        unit=""
        label="Calories Burned"
        icon="🔥"
      />
      <StatCard
        value={stats.distance}
        unit="km"
        label="Distance"
        icon="🏃"
      />
      <StatCard
        value={stats.moveMinutes}
        unit="min"
        label="Active Time"
        icon="⏱️"
      />
      <StatCard
        value={stats.waterIntake}
        unit="L"
        label="Water Intake"
        icon="💧"
      />
      <StatCard
        value={stats.activeSessions}
        unit=""
        label="Workouts"
        icon="💪"
      />
      <StatCard
        value={stats.restingHR}
        unit="bpm"
        label="Resting HR"
        icon="❤️"
      />
    </div>
  );
};

StatCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  unit: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

DailyStats.propTypes = {
  stats: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    moveMinutes: PropTypes.number.isRequired,
    waterIntake: PropTypes.number.isRequired,
    activeSessions: PropTypes.number.isRequired,
    restingHR: PropTypes.number.isRequired
  }).isRequired
};

export default DailyStats; 
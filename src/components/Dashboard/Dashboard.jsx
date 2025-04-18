import React, { useState } from 'react';
import CircularProgress from './CircularProgress';
import DailyStats from './DailyStats';
import DailyGoals from './DailyGoals';
import WeeklyTarget from './WeeklyTarget';
import LastWorkout from './LastWorkout';
import AddWorkout from './AddWorkout';
import WaterTracker from './WaterTracker';

const Dashboard = () => {
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [showWaterTracker, setShowWaterTracker] = useState(false);
  
  const heartPoints = 57;
  const steps = 8432;
  const stats = {
    calories: 377,
    distance: 5.2,
    moveMinutes: 48,
    waterIntake: 1.5, // Liters
    activeSessions: 3,
    restingHR: 72 // BPM
  };
  
  const handleAction = (action) => {
    switch (action) {
      case 'workout':
        setShowAddWorkout(true);
        break;
      case 'water':
        setShowWaterTracker(true);
        break;
      case 'meal':
        // Add meal tracking functionality
        console.log('Meal tracking coming soon');
        break;
      case 'plans':
        // Add workout plans functionality
        console.log('Workout plans coming soon');
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Section */}
        <div className="lg:col-span-3 bg-gray-800 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Fitness Enthusiast! 💪</h1>
          <p className="text-gray-400">Keep pushing your limits. Here's your fitness summary for today.</p>
        </div>

        {/* Progress Circles Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Daily Progress</h2>
          <div className="grid grid-cols-2 gap-4">
            <CircularProgress 
              value={heartPoints} 
              maxValue={100} 
              color="emerald" 
              label="Heart Pts"
              size="large"
            />
            <CircularProgress 
              value={steps} 
              maxValue={10000} 
              color="blue" 
              label="Steps"
              size="large"
            />
          </div>
        </div>

        {/* Workout Streak Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Workout Streak</h2>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">12</div>
            <p className="text-gray-400">Days in a row</p>
            <div className="mt-4 flex justify-center space-x-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-2 h-8 rounded-full bg-emerald-400/60" />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAction('workout')}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 transition flex flex-col items-center"
            >
              <span className="text-2xl mb-1">💪</span>
              <span>Start Workout</span>
            </button>
            <button
              onClick={() => handleAction('water')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg p-4 transition flex flex-col items-center"
            >
              <span className="text-2xl mb-1">💧</span>
              <span>Log Water</span>
            </button>
            <button
              onClick={() => handleAction('meal')}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 transition flex flex-col items-center"
            >
              <span className="text-2xl mb-1">🍽️</span>
              <span>Track Meal</span>
            </button>
            <button
              onClick={() => handleAction('plans')}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg p-4 transition flex flex-col items-center"
            >
              <span className="text-2xl mb-1">📋</span>
              <span>View Plans</span>
            </button>
          </div>
        </div>

        {/* Daily Stats Section - Enhanced */}
        <div className="lg:col-span-3 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Today's Activity</h2>
          <DailyStats stats={stats} />
        </div>

        {/* Goals Section */}
        <div className="lg:col-span-2">
          <DailyGoals />
        </div>

        {/* Weekly Target */}
        <div>
          <WeeklyTarget achieved={391} target={150} />
        </div>

        {/* Last Workout - Full Width */}
        <div className="lg:col-span-3">
          <LastWorkout />
        </div>

        {/* Upcoming Classes */}
        <div className="lg:col-span-3 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Upcoming Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-emerald-400 font-semibold">HIIT Training</div>
              <div className="text-white">Today, 6:00 PM</div>
              <div className="text-gray-400">with Coach Mike</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-blue-400 font-semibold">Yoga Flow</div>
              <div className="text-white">Tomorrow, 7:00 AM</div>
              <div className="text-gray-400">with Coach Sarah</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-purple-400 font-semibold">Strength Training</div>
              <div className="text-white">Tomorrow, 5:00 PM</div>
              <div className="text-gray-400">with Coach John</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddWorkout && <AddWorkout onClose={() => setShowAddWorkout(false)} />}
      {showWaterTracker && <WaterTracker onClose={() => setShowWaterTracker(false)} />}
    </div>
  );
};

export default Dashboard; 
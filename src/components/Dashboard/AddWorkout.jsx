import React, { useState } from 'react';

const AddWorkout = ({ onClose }) => {
  const [workoutData, setWorkoutData] = useState({
    type: '',
    duration: '',
    intensity: 'medium',
    notes: ''
  });

  const workoutTypes = [
    { id: 'cardio', name: 'Cardio', icon: '🏃‍♂️' },
    { id: 'strength', name: 'Strength Training', icon: '💪' },
    { id: 'yoga', name: 'Yoga', icon: '🧘‍♂️' },
    { id: 'hiit', name: 'HIIT', icon: '⚡' },
    { id: 'swimming', name: 'Swimming', icon: '🏊‍♂️' },
    { id: 'cycling', name: 'Cycling', icon: '🚴‍♂️' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Workout Data:', workoutData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Add Workout</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Workout Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {workoutTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setWorkoutData({ ...workoutData, type: type.id })}
                className={`p-4 rounded-lg flex flex-col items-center justify-center ${
                  workoutData.type === type.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="text-2xl mb-2">{type.icon}</span>
                <span className="text-sm">{type.name}</span>
              </button>
            ))}
          </div>

          {/* Duration Input */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Duration (minutes)</label>
            <input
              type="number"
              value={workoutData.duration}
              onChange={(e) => setWorkoutData({ ...workoutData, duration: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter duration"
              required
            />
          </div>

          {/* Intensity Selection */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Intensity</label>
            <div className="grid grid-cols-3 gap-2">
              {['low', 'medium', 'high'].map((intensity) => (
                <button
                  key={intensity}
                  type="button"
                  onClick={() => setWorkoutData({ ...workoutData, intensity })}
                  className={`p-2 rounded-lg ${
                    workoutData.intensity === intensity
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Notes Input */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Notes</label>
            <textarea
              value={workoutData.notes}
              onChange={(e) => setWorkoutData({ ...workoutData, notes: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add any notes about your workout"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Add Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkout; 
import { useState } from "react";
// import JournalEditor from "../views/Journal/JournalEditor";
import TimelineView from "../Journal/TimeLineView";
import EntryCard from "../Journal/EntryCard";

const JournalDashboard = () => {
  // Mock journal entries (Replace with API/Firebase later)
  const [journalEntries, setJournalEntries] = useState([
    {
      id: 1,
      title: "Morning Workout",
      content: "Did 30 minutes of cardio. Feeling great!",
      date: "2025-04-04",
    },
    {
      id: 2,
      title: "Healthy Eating",
      content: "Tried a new salad recipe. Loved it!",
      date: "2025-04-03",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newEntry, setNewEntry] = useState("");

  const handleAddEntry = () => {
    if (newEntry.trim() === "") return;
    const newJournalEntry = {
      id: journalEntries.length + 1,
      title: "New Entry",
      content: newEntry,
      date: new Date().toISOString().split("T")[0],
    };
    setJournalEntries([newJournalEntry, ...journalEntries]);
    setNewEntry("");
    setIsAdding(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-200 mb-6">
        Journal Dashboard
      </h1>

      {/* Add New Entry Section */}
      {isAdding ? (
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <JournalEditor value={newEntry} onChange={setNewEntry} />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleAddEntry}
              className="bg-yellow-500 px-4 py-2 rounded-lg mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="bg-gray-600 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-yellow-500 px-4 py-2 rounded-lg w-full mb-4"
        >
          + Add New Entry
        </button>
      )}

      {/* Timeline View */}
      <TimelineView>
        {journalEntries.length > 0 ? (
          journalEntries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))
        ) : (
          <p className="text-gray-400 text-center">
            No journal entries yet. Start writing your journey!
          </p>
        )}
      </TimelineView>
    </div>
  );
};

export default JournalDashboard;

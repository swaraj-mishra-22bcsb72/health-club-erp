import { useState } from "react";

const JournalEditor = () => {
  const [title, setTitle] = useState("New Entry");
  const [content, setContent] = useState("Start writing here...");

  const handleSave = () => {
    console.log("Saved Entry:", { title, content });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-4">
      <h2 className="text-xl font-semibold text-gray-800">New Journal Entry</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      <textarea
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Save Entry
      </button>
    </div>
  );
};

export default JournalEditor;

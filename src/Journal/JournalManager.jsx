import { useState } from "react";
import JournalEditor from "../components/JournalEditor";

const JournalManager = () => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="p-6 text-center">
      {!showEditor && (
        <button
          onClick={() => setShowEditor(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Add New Entry
        </button>
      )}

      {showEditor && <JournalEditor />}
    </div>
  );
};

export default JournalManager;

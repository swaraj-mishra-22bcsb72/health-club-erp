const EntryCard = ({ entry }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow my-2">
      <h2 className="text-xl font-semibold">{entry.title}</h2>
      <p className="text-gray-300">{entry.content}</p>
      <small className="text-gray-400">{entry.date}</small>
    </div>
  );
};

export default EntryCard;

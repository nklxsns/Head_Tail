import { useState } from "react";

const HeadTail = () => {
  const [selectedFace, setSelectedFace] = useState("");
  const [board, setBoard] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFace === "") {
      setError("Please select a value");
      return;
    } else {
      setError("");
    }

    console.log(selectedFace);

    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      if (newBoard.length === 0 || newBoard[newBoard.length - 1][0] !== selectedFace) {
        newBoard.push([selectedFace]);
      } else {
        newBoard[newBoard.length - 1].push(selectedFace);
      }
      return newBoard;
    });

    setSelectedFace("");
  };

  return (
    <div className="max-w-full p-4 sm:p-6 bg-white flex flex-col gap-8">
      <div className="w-full lg:max-w-md bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm min-w-[290px]">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Head & Tail</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Choose a face:</label>
            <select
              value={selectedFace}
              onChange={(e) => {
                setSelectedFace(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-gray-300 transition"
            >
              <option value="">-- Select a value --</option>
              <option value="H">Head</option>
              <option value="T">Tail</option>
            </select>
            {error && (
              <div className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded border-l-4 border-red-500">
                {error}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 sm:gap-6 px-2 sm:px-4 py-2 min-w-max">
          {board.map((faces, colIndex) => (
            <div key={colIndex} className="flex flex-col items-center gap-2 bg-white rounded-lg py-4 min-w-[30px]">
              {faces.map((face, rowIndex) => (
                <span
                  key={rowIndex}
                  className="text-lg font-bold text-gray-800 w-6 h-6 flex items-center justify-center border rounded-full bg-gray-100"
                >
                  {face}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadTail;

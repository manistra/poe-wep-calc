import React from "react";

interface CalculationResult {
  id: string;
  pdps: string;
  increasedPhys: string;
  increasedRune: string;
  result: number;
  timestamp: number;
}

interface ResultsTableProps {
  results: CalculationResult[];
  onClearHistory: () => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  results,
  onClearHistory,
}) => {
  if (results.length === 0) return null;

  return (
    <div className="mt-6 backdrop-blur bg-black bg-opacity-70 p-10 border-poe-text border rounded-xl min-w-[50%] mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-poe-text">
          Calculation History:
        </h3>
        <button
          onClick={onClearHistory}
          className="bg-[#2d2d2d] text-poe-text py-2 px-4 rounded-md hover:bg-[#3d3d3d] transition-colors border border-poe-text"
        >
          Clear History
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full border-collapse bg-[#2d2d2d]">
          <thead className="sticky top-0 bg-[#2d2d2d]">
            <tr>
              <th className="px-4 py-2 text-left border border-poe-text text-poe-text">
                Total Amount
              </th>
              <th className="px-4 py-2 text-left border border-poe-text text-poe-text">
                Percentage Increase
              </th>
              <th className="px-4 py-2 text-left border border-poe-text text-poe-text">
                Rune Percentage Increase
              </th>
              <th className="px-4 py-2 text-left border border-poe-text text-poe-text">
                Total Amount with Runes
              </th>
              <th className="px-4 py-2 text-left border border-poe-text text-poe-text">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="hover:bg-[#3d3d3d]">
                <td className="px-4 py-2 border border-poe-text text-[#c8c8c8]">
                  {result.pdps}
                </td>
                <td className="px-4 py-2 border border-poe-text text-[#c8c8c8]">
                  {result.increasedPhys}%
                </td>
                <td className="px-4 py-2 border border-poe-text text-[#c8c8c8]">
                  {result.increasedRune}%
                </td>
                <td className="px-4 py-2 border border-poe-text font-bold text-white">
                  {result.result.toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-poe-text text-[#c8c8c8]">
                  {new Date(result.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;

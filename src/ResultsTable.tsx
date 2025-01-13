import React from "react";

interface CalculationResult {
  id: string;
  pdps: string;
  increasedPhys: string;
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
    <div className="mt-6 backdrop-blur bg-black bg-opacity-70 p-10 border-[#af6025] border rounded-xl w-1/2 mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-[#af6025]">
          Calculation History:
        </h3>
        <button
          onClick={onClearHistory}
          className="bg-[#2d2d2d] text-[#af6025] py-2 px-4 rounded-md hover:bg-[#3d3d3d] transition-colors border border-[#af6025]"
        >
          Clear History
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full border-collapse bg-[#2d2d2d]">
          <thead className="sticky top-0 bg-[#2d2d2d]">
            <tr>
              <th className="px-4 py-2 text-left border border-[#af6025] text-[#af6025]">
                PDPS
              </th>
              <th className="px-4 py-2 text-left border border-[#af6025] text-[#af6025]">
                % inc Phys
              </th>
              <th className="px-4 py-2 text-left border border-[#af6025] text-[#af6025]">
                Result
              </th>
              <th className="px-4 py-2 text-left border border-[#af6025] text-[#af6025]">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="hover:bg-[#3d3d3d]">
                <td className="px-4 py-2 border border-[#af6025] text-[#c8c8c8]">
                  {result.pdps}
                </td>
                <td className="px-4 py-2 border border-[#af6025] text-[#c8c8c8]">
                  {result.increasedPhys}%
                </td>
                <td className="px-4 py-2 border border-[#af6025] text-[#c8c8c8]">
                  {result.result.toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-[#af6025] text-[#c8c8c8]">
                  {new Date(result.timestamp).toLocaleTimeString()}
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

import React, { useState, useEffect } from "react";
import ResultsTable from "./ResultsTable";

interface CalculationResult {
  id: string;
  pdps: string;
  increasedPhys: string;
  result: number;
  timestamp: number;
}

const Calculator: React.FC = () => {
  const [pdps, setPdps] = useState<string>("");
  const [increasedPhys, setIncreasedPhys] = useState<string>("");
  const [singleRune, setSingleRune] = useState<boolean>(false);
  const [results, setResults] = useState<CalculationResult[]>([]);

  useEffect(() => {
    const savedResults = localStorage.getItem("calculationResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calculationResults", JSON.stringify(results));
  }, [results]);

  const calculateResult = () => {
    const pdpsNum = parseFloat(pdps);
    const physNum = parseFloat(increasedPhys);

    if (isNaN(pdpsNum) || isNaN(physNum)) {
      alert("Please enter valid numbers");
      return;
    }

    const modifier = singleRune ? 1.2 : 1.4;
    const calculatedResult =
      (pdpsNum / (physNum / 100 + 1)) * (physNum / 100 + modifier);

    const newResult: CalculationResult = {
      id: Date.now().toString(),
      pdps,
      increasedPhys,
      result: calculatedResult,
      timestamp: Date.now(),
    };

    setResults((prev) => [newResult, ...prev].slice(0, 50));
  };

  const clearHistory = () => {
    setResults([]);
    localStorage.removeItem("calculationResults");
  };

  return (
    <div className="w-full">
      <div className="p-10 max-w-4xl mx-auto min-w-[500px] min-h-[200px] backdrop-blur bg-black bg-opacity-70 border border-poe-text rounded-xl shadow-xl w-fit">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-poe-text mb-1">
              pDPS
            </label>
            <input
              type="number"
              value={pdps}
              onChange={(e) => setPdps(e.target.value)}
              className="w-full px-3 py-2 bg-[#2d2d2d] border border-poe-text rounded-md text-[#c8c8c8] focus:ring-2 focus:ring-poe-text focus:outline-none"
              placeholder="Enter PDPS"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-poe-text mb-1">
              % increased Physical
            </label>
            <input
              type="number"
              value={increasedPhys}
              onChange={(e) => setIncreasedPhys(e.target.value)}
              className="w-full px-3 py-2 bg-[#2d2d2d] border border-poe-text rounded-md text-[#c8c8c8] focus:ring-2 focus:ring-poe-text focus:outline-none"
              placeholder="Enter % increased Physical"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={singleRune}
              onChange={(e) => setSingleRune(e.target.checked)}
              className="h-4 w-4 text-poe-text border-poe-text rounded bg-[#2d2d2d]"
            />
            <label className="ml-2 block text-sm text-[#c8c8c8]">
              Calculate for only 1 rune
            </label>
          </div>

          <button
            onClick={calculateResult}
            className="w-full bg-poe-text text-white py-2 px-4 rounded-md hover:bg-[#8d4e1d] transition-colors"
          >
            Calculate
          </button>
        </div>
      </div>
      <ResultsTable results={results} onClearHistory={clearHistory} />
    </div>
  );
};

export default Calculator;

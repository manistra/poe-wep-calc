import backgroundImage from "./assets/poe-bg.jpg";
import Calculator from "./Calculator";

function App() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover bg-black w-full flex flex-col items-center gap-20 p-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="text-poe-text backdrop-blur bg-black bg-opacity-70 p-8 text-4xl rounded-xl">
        Path Of Exile 2 Physical Weapon Damage Rune Calculator
      </h1>

      <Calculator />
    </div>
  );
}

export default App;

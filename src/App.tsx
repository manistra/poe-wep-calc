import backgroundImage from "./assets/poe-bg.jpg";
import Calculator from "./Calculator";

function App() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover bg-black w-full flex flex-col items-center gap-14 p-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* <div className="flex flex-col items-center p-10 blur-[1px] rounded">
        <h1 className="text-[80px] text-white font-serif m-0">
          Path Of Exile 2
        </h1>
        <h1 className="text-[40px] text-white font-serif">
          Weapon Physical Damage Rune Calculator
        </h1>
      </div> */}

      <Calculator />
    </div>
  );
}

export default App;

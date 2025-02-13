import "./index.css";
import HomePage from "./Pages/HomePage";
import { GlobalProvider } from "./GlobalContext";
function App() {
  return (
    <GlobalProvider>
      {/* Main Content Layout */}
      <div className="w-full h-full flex flex-col">
        {/* Main Content Takes Remaining Space */}
        <div className="flex-1 p-4">
          <HomePage />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

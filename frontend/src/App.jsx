import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

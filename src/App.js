import "./styles/Reset.css"
import "./styles/Styles.css"
import Info from "./components/Info.js"
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;

import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import OutfitMaker from "./Components/OutfitMaker";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Women from "./Components/Women/Women";
import ProductInfo from "./Components/ProductInfo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/outfitmaker" element={<OutfitMaker />} />
        <Route path="/womensection" element={<Women/>} />
        <Route path="/productinfo" element={<ProductInfo/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

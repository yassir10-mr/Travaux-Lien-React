import "./App.css";
import MainPage from "./MyComponents/MainPage";
import { Routes, Route } from "react-router-dom";
import Calculator from "./MyComponents/calculator";
import ProfilApp from "./MyComponents/ProfilApp";
import FlagApp from "./MyComponents/FlagApp";
import TDLInterface from "./MyComponents/TDLInterface";
import Page404 from "./MyComponents/Page404";
import Formulaire from "./MyComponents/Formulaire";
import Table from "./MyComponents/Table";
import Home from "./MyComponents/Home";
import Filtrer from "./MyComponents/Filtrer";

function App() {
  return (
    <div>
      {/* <MainPage/> */}
      {/* <Calculator/> */}
      {/* <ProfilApp/> */}
      {/* <FlagApp/> */}
      {/* <TDLInterface/> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/src/MyComponents/calculator.js"
          element={<Calculator />}
        />
        <Route path="/src/MyComponents/ProfilApp.js" element={<ProfilApp />} />
        <Route path="/src/MyComponents/FlagApp.js" element={<FlagApp />} />
        <Route
          path="/src/MyComponents/TDLInterface.js/*"
          element={<TDLInterface />}
        />

        <Route path="/src/MyComponents/Home.js" element={<Home />} />
        <Route path="/src/MyComponents/Filtrer.js" element={<Filtrer />} />
        <Route path="/src/MyComponents/Table.js" element={<Table />} />
        <Route
          path="/src/MyComponents/Formulaire.js"
          element={<Formulaire />}
        />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}
export default App;

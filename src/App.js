import CreateContent from "./content/CreateContent";
import "./App.css";
import "./navbar/navbar.css"
import ContentTable from "./content/ContentTable.js";
import CreateLicense from "./license/CreateLicense";
import { Route, Routes } from "react-router-dom"

import AllLicenses from "./license/AllLicenses";

import NavBar from "./navbar/NavBar";

function App() {


  return (
    <>
      <NavBar />
      
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={null} />
          <Route path="/Content" element={<ContentTable />} />
          <Route path="/License" element={<AllLicenses />} />
          <Route path="/CreateContent" element={<CreateContent/>}/>
          <Route path="/CreateLicense" element={<CreateLicense/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

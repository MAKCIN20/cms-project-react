import CreateContent from "./content/CreateContent";
import "./App.css";
import ContentTable from "./content/ContentTable.js";
import CreateLicense from "./license/CreateLicense";
import ConnectLicenseToContent from "./content/ConnectLicenseToContent";
import AllLicenses from "./license/AllLicenses";
import ConnectionModal from "./content/ConnectionModal"
function App() {
  return (
    <div>
      <CreateContent />
      <CreateLicense />
      <ConnectLicenseToContent />
      <AllLicenses />
      <ContentTable/>
    
    </div>
  );
}

export default App;

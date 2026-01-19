import { AppProvider } from "./context/AppContext";
import BlueprintBuilder from "./components/BlueprintBuilder";
import ContractDashboard from "./components/ContractDashboard";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <h1>Contract Management Platform</h1>
      <BlueprintBuilder />
      <ContractDashboard />
    </AppProvider>
  );
}

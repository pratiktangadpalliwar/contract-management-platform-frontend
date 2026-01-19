import { useApp } from "../context/AppContext";

export default function ContractForm({ blueprint }) {
  const { contracts, setContracts } = useApp();

  const createContract = () => {
    setContracts([...contracts, {
      id: Date.now(),
      name: blueprint.name + " Contract",
      blueprintName: blueprint.name,
      fields: blueprint.fields,
      status: "Created",
      createdAt: new Date().toLocaleDateString()
    }]);
  };

  return <button onClick={createContract}>Generate Contract</button>;
}

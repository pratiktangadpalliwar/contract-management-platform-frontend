import { useApp } from "../context/AppContext";

const flow = ["Created","Approved","Sent","Signed","Locked"];

export default function ContractDashboard() {
  const { contracts, setContracts } = useApp();

  const next = (c) => {
    const i = flow.indexOf(c.status);
    if (i < flow.length - 1) {
      setContracts(contracts.map(x =>
        x.id === c.id ? { ...x, status: flow[i+1] } : x
      ));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Blueprint</th><th>Status</th><th>Date</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.blueprintName}</td>
            <td>{c.status}</td>
            <td>{c.createdAt}</td>
            <td><button onClick={() => next(c)}>Next</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

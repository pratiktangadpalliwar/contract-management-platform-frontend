import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function BlueprintBuilder() {
  const { blueprints, setBlueprints } = useApp();
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { id: Date.now(), type, label: type, x: 50, y: 50 }]);
  };

  const saveBlueprint = () => {
    setBlueprints([...blueprints, { id: Date.now(), name, fields }]);
    setName(""); setFields([]);
  };

  return (
    <div>
      <h2>Create Blueprint</h2>
      <input placeholder="Blueprint Name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => addField("Text")}>Text</button>
      <button onClick={() => addField("Date")}>Date</button>
      <button onClick={() => addField("Signature")}>Signature</button>
      <button onClick={() => addField("Checkbox")}>Checkbox</button>
      <button onClick={saveBlueprint}>Save</button>

      <div className="page">
        {fields.map(f => (
          <div key={f.id} className="field" style={{ left: f.x, top: f.y }}>
            {f.label}
          </div>
        ))}
      </div>
    </div>
  );
}

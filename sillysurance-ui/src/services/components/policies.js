import { useEffect, useState } from "react";
import { fetchPolicies } from "./services/api";

const App = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetchPolicies().then(setPolicies).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Insurance Policies</h1>
      <ul>
        {policies.map((policy) => (
          <li key={policy.id}>{policy.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

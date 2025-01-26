// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <div className="p-4 bg-blue-100">
//         <h1 className="text-2xl font-bold text-blue-900">
//           Welcome to the Insurance App!
//         </h1>
//         <p className="mt-2 text-gray-700">Tailwind is working perfectly.</p>
//       </div>
//     </>
//   )
// }

// export default App


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

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  console.log(import.meta.env.VITE_API_URL)
  useEffect(() => {
    fetch('/backend')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>APP DOIS</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
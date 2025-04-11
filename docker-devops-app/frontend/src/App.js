import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000').then(res => res.text()).then(setData);
  }, []);

  return <div><h1>{data}</h1></div>;
}
export default App;


import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}`).then(res => res.text()).then(setData);
  }, []);

  return <div><h1>{data}</h1></div>;
}
export default App;


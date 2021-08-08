import { useEffect, useState } from 'react';
import './App.scss';
import loading from './img/loading.gif';

const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function App() {
  const [data, setData] = useState(null);
  const count = 15;
  const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

  useEffect(() => {
    fetchData(url);

    // eslint-disable-next-line
  }, []);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
  };

  return (
    <div className="App">
      <h1 className="title">Random Image Feed</h1>
      <div className="container">
        {data ? (
          data.map((item) => (
            <img
              key={item.id}
              src={item.urls.regular}
              alt={item.alt_description}
            />
          ))
        ) : (
          <img src={loading} alt="Loading..." />
        )}
      </div>
    </div>
  );
}

export default App;

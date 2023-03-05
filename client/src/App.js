import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [host, setHost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //TODO: get from db, update host
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div style={{ fontSize: "50px" }}>{host}</div>
    </div>
  );
}

export default App;

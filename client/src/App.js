import './App.css';
import { useEffect, useState } from "react";
import {getDataAPIMethod} from "./api/api";

function App() {
  const [host, setHost] = useState("a");

  useEffect(() => {
    const interval = setInterval(() => {
      getDataAPIMethod().then((res) => {
        console.log(res);
        setHost(res.host)
      });
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

import './App.css';
import { useEffect, useState } from "react";
import {getDataAPIMethod, postDataAPIMethod} from "./api/api";

function App() {
  const [hosts, setHosts] = useState([]);
  const [host, setHost] = useState("a");

  useEffect(() => {
    const interval = setInterval(() => {
      getDataAPIMethod().then((res) => {
        console.log(res);
        setHost(res[0].host)
        setHosts(res);
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    const newData = {
      hostIP: "333.333"
    };
    postDataAPIMethod(1, newData).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="App">
      <div style={{ fontSize: "50px" }}>{host}</div>
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";
function App() {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(0);
  const [shorturl, setShorturl] = useState("");
  const [inputList, setInputList] = useState([
    { taskName: "Short URl", longurl: "Long Url" }
  ]);

  const handleAdd = () => {
    setInputList([...inputList, { taskName: shorturl, longurl: url }]);
  };
  const handleOnshort = () => {
    var x = count + 1;
    setCount(x);
    console.log(count);
  };

  const handleCopy = () =>{
    navigator.clipboard.writeText(shorturl);
    alert("Copied");
  }

  useEffect(() => {
    if (count > 0 && url !== null) {
      var temp = "https://api.shrtco.de/v2/shorten?url=" + url;
      fetch(temp)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setShorturl(json.result.full_short_link);
        });
    }
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="box">
        <input
          className="mr11"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button className="mr11" onClick={handleOnshort}>
          Shorten Url
        </button>
      </div>
      <div className="mr15">
        <input className="mr15" type="text" value={shorturl}></input>
        <button className="mr15 " onClick={handleCopy}>Copy</button>
        <button className="mr15 " onClick={() => handleAdd()}>
          Add to List
        </button>
      </div>
      <List inputList={inputList}></List>
      {/*<table className="tablebox">
        {inputList.map((item, i) => {
          return (
            <div key={i} className="box">
              <tr>
                <td>
                  <input
                    className="mr11"
                    type="text"
                    name="taskName"
                    placeholder="Task Name"
                    value={item.longurl}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="mr11"
                    type="text"
                    name="taskName"
                    placeholder="Task Name"
                    value={item.taskName}
                  />
                </td>
              </tr>
            </div>
          );
        })}
      </table>*/}
    </div>
  );
}

export default App;

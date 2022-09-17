import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [inputList, setInputList] = useState([{ taskName: "" }]);
  const [inputList1, setInputList1] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddinput = () => {
    setInputList([...inputList, { taskName: "" }]);
  };

  const handleRemoveinput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleRemoveinput1 = (index) => {
    const selectedItem = inputList1[index];
    setInputList([...inputList, selectedItem]);

    const list = [...inputList1];
    list.splice(index, 1);
    setInputList1(list);
  };

  const handleMarkComplete = (index) => {
    const selectedItem = inputList[index];
    setInputList1([...inputList1, selectedItem]);
    handleRemoveinput(index);
    if (inputList.length === 0) {
      handleAddinput();
    }
  };

  return (
    <div className="App">
      <h1>To Do List </h1>
      {inputList.map((item, i) => {
        return (
          <div key={i} className="box">
            <input
              className="mr11"
              type="text"
              name="taskName"
              placeholder="Task Name"
              value={item.taskName}
              onChange={(e) => handleChange(e, i)}
            />

            {inputList.length !== 1 && (
              <input
                className="mr11"
                type="button"
                value="Remove"
                onClick={() => handleRemoveinput(i)}
              />
            )}

            <input
              className="mr11"
              type="button"
              value="Mark Complete"
              onClick={() => handleMarkComplete(i)}
            />
          </div>
        );
      })}
      <input
        className="mr12"
        type="button"
        value="Add"
        onClick={handleAddinput}
      />
      {inputList1.length > 0 && (
        <div className="mr15">
          <h1>Completed Task</h1>

          {inputList1.map((item, i) => {
            return (
              item.taskName && (
                <div key={i}>
                  <input
                    className="mr11"
                    type="text"
                    name="taskName"
                    placeholder="Task Name"
                    value={item.taskName}
                    onChange={(e) => handleChange(e, i)}
                  />

                  <input
                    className="mr11"
                    type="button"
                    value="UnComplete"
                    onClick={() => handleRemoveinput1(i)}
                  />
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}

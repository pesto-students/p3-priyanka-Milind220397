import React from 'react'
import App from '../App'
export default function List({inputList}) {
  return (
    <div>
      <table className="tablebox">
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
      </table>
    </div>
  )
}

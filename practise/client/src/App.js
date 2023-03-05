import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [comment,setComment] =useState('')
  const[newComment,setNewComment]=useState('')
  const [employeesList,setEmployeesList] = useState([])

  const addEmployee = () => {
    axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      comment:comment,
    }).then(()=>{
      setEmployeesList([
        ...employeesList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          comment: comment,
        },
      ]);
    })
  };

  const getEmployees = ()=>{
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeesList(response.data);
    });
  }

const updataEmployees = (sid) =>{
axios.put("http://localhost:3001/update",{comment:newComment,sid:sid}).then((response)=>{
  setEmployeesList(employeesList.map((v)=>{
    return v.sid === sid ?{ 
      sid:v.sid,
      name:v.name,
      age:v.age,
      country:v.country,
      position:v.position,
      comment:newComment,
    }:v;
  }));
});
}


  const deleteEmployees = (sid) =>{
      axios.delete(`http://localhost:3001/delete/${sid}`).then((response)=>{
        setEmployeesList(employeesList.filter((v)=>{
          return v.sid !== sid
        }))
      });
  }
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Comment:</label>
        <input
          type="text"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <hr />
      <div className="employees">
        <button
          onClick={() => {
            getEmployees();
          }}
        >
          Show
        </button>
        {employeesList.map((v, i) => {
          return (
            <div className="employee" key={i}>
              <button
                onClick={() => {
                  updataEmployees(v.sid);
                }}
              >
                Update
              </button>
              <input
                type="text"
                placeholder="請輸入評論"
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
              />
              <h3>Name: {v.name}</h3>
              <h3>Age: {v.age}</h3>
              <h3>Country: {v.country}</h3>
              <h3>Position: {v.position}</h3>
              <h3>Comment:{v.comment}</h3>
              <button
                onClick={() => {
                  deleteEmployees(v.sid);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

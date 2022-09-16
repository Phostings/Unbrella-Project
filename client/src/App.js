import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
  const [listOfItems, setListOfItems] = useState([])
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [username, setUsername] = useState("")
  const [group, setGroup] = useState("")
  const [nutrients, setNutrients] = useState("")

  

  useEffect(() => {
    Axios.get("http://localhost:3001/getItem").then((response) => {
      setListOfItems(response.data);
    })
    Axios.get('http://localhost:3001/getUser').then((response) => {
      setListOfUsers(response.data);
    })
  }, []);

  const createItem = () => {
    Axios.post("http://localhost:3001/createItem", {
      name, 
      group, 
      nutrients,
    }).then((response) => {
      setListOfItems([
        ...listOfItems, {
          name,
          group,
          nutrients,
        }
      ]);
    });
  };

  const createUser = () =>{
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers, {
          name,
          age,
          username,
        }
      ])
    })
  }

  return (
    <div className="App">
      <div className="itemDisplay">
        {listOfItems.map((item) => {
          return (
            <div>
              <h1>Name: {item.name}</h1>
              <h1>group: {item.group}</h1>
              <h1>nutrients: {item.nutrients}</h1>
            </div>
          );  
        })}
      </div>

      <div>
        <input type="text" placeholder="Name..." 
        onChange={(event) => {
          setName(event.target.value);
          }}
        />
        <input type="text" placeholder="group..." 
        onChange={(event) => {
          setGroup(event.target.value);
        }}
        />
        <input type="text" placeholder="nutrients..."
        onChange={(event) => {
          setNutrients(event.target.value);
        }}
        />
        <button onClick={createItem}> Create Item</button>
      </div>
    </div>
  );
};

export default App;

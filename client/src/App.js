import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUser").then((response) => {
      setListOfUsers(response.data);
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      first, 
      last, 
      email,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers, {
          first,
          last,
          email,
        }
      ]);
    });
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>first: {user.first}</h1>
              <h1>last: {user.last}</h1>
              <h1>email: {user.email}</h1>
            </div>
          );  
        })}
      </div>

      <div>
        <input type="text" placeholder="First..." 
        onChange={(event) => {
          setFirst(event.target.value);
          }}
        />
        <input type="text" placeholder="User..." 
        onChange={(event) => {
          setLast(event.target.value);
        }}
        />
        <input type="text" placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        />
        <button onClick={createUser}> Create User</button>
      </div>
    </div>
  );
};

export default App;
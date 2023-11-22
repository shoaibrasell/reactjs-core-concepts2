import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{} , [])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} phone={user.phone} email={user.email} address={user.address.city}></User>)
      }
    </div>
  );
}
function User(props){
  return(
    <div style={{border:'5px solid purple', margin: "25px"}}>
      <h3>Name: {props.name}</h3>p
      <h4>Phone : {props.phone}</h4>
      <h5>Address : {props.address}</h5>
      <p>Email : {props.email}</p>
    </div>
  )
};

function Counter() {
  const [count, setCount] = useState(15);

  const increaseCount = () => setCount(count + 1);
  // const decreaseCount = ()=>{
  //   const newCount = count - 1;
  //   setCount(newCount)
  // }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase </button>
    </div>
  );
}

export default App;

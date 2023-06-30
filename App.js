import React,{ useState} from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');
  const[list,setlist] = useState([]);
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleAgeChange =(event)=>{
    setAge(event.target.value);
    console.log(name);
  }
  const handleEmailChange =(event)=>{
    setEmail(event.target.value);
    console.log(email);
  }
  const handleAdd = (event) => {
    event.preventDefault();
    setlist([...list, name]);
    setName("")
    setlist([...list, age]);
    setAge("")
  };
  return (
  <form className="form" onSubmit={handleAdd}>
    <label>Name:</label>
    <br/>
    <input placeholder="your Name" value={name} onChange={handleChange} />
    <label >Age:</label><br/>
    <input type="text" placeholder="age" value={age} onChange={handleAgeChange} /><br/>
    <label>Email:</label><br/><input type="email" placeholder="mail" value={email} onChange={handleEmailChange} /><br/>
    <button>Add</button>
    </form>
  );
  
};

export default App;
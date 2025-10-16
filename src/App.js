import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [mark, setMark] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleMarkChange = (event) => {
    setMark(event.target.value);
  };

  const handleSubmit = () => {
     if (name && surname && age && mark) {
      if (mark < 50) {
        alert(`Fail: Your name is ${name} and your surname is ${surname} and your age is ${age} and your mark is ${mark}`);
      } else {
        alert(`Success: Your name is ${name} and your surname is ${surname} and your age is ${age} and your mark is ${mark}`);
      }
    } else {
      alert("Error");
    }
  };

  const handleClear = () => {
    setName('');
    setSurname('');
    setAge('');
    setMark('');
  };

  return (
    <div className='App'>
      <h1>React App</h1>
      <hr />
      <label>Enter text:</label><br />
      <input type="text" placeholder="John" value={name} onChange={handleNameChange} />
      <br />
      <br />
      <label>Enter surname:</label><br />
      <input type="text" placeholder="Doe" value={surname} onChange={handleSurnameChange} />
      <br />
      <br />
      <label>Enter age:</label><br />
      <input type="text" placeholder="30" value={age} onChange={handleAgeChange} />
      <br />
      <br />
      <label>Enter your mark:</label><br />
      <input type="text" placeholder="55" value={mark} onChange={handleMarkChange} />
      <br />
      <br />
      <button className="Submit" onClick={handleSubmit}>Submit</button>
      <button className="Clear" onClick={handleClear}>Clear</button>
      <br />
      <br />
      <p>{name} {surname} {age} {mark}</p>
      <hr />
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Rajshahi" special="Mango"></District>
      <District name="Dhaka" special="capital"></District>
      <District name="Chittagong" special="Bay of Bengal"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px',
};

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boot The Power</button>
    </div>
  );
}

export default App;

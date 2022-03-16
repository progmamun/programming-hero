import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Dr. Mahfuz', job: 'singer' },
];

function App() {
  const nayoks = ['Mamun', 'BappaRaz', 'Riaz'];
  return (
    <div className="App">
      {nayoks.map(nayok => (
        <li>Name: {nayok}</li>
      ))}

      {nayoks.map(nayok => (
        <Person name={nayok}></Person>
      ))}
      {singers.map(singer => (
        <Person name={singer.name}></Person>
      ))}
      {/* <Person name="Mamun" nayika="Purnima"></Person> */}
      <Person name={nayoks[0]} nayika="Purnima"></Person>
      <h5>New component. YAY</h5>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

export default App;

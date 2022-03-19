import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
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

function LoadPosts(data) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {posts.map(post => (
        <Post title={post.title} body={post.body} id={post.id}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div
      style={{
        backgroundColor: 'gold',
        margin: '20px',
        border: '4px solid salmon',
      }}
    >
      <h1>ID: {props.id}</h1>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  );
}

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

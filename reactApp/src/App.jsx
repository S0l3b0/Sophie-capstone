import './App.css'
import friendsImg from './assets/friends.jpeg'

function App() {

  const yourName = "Sophie Bowyer";

  const currentYear = 2026;


  return (

    <div>

      <h1>Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I'm learning React in {currentYear}.</p>

      <p>This is my first React component!</p>

      <ul>
        <li>Lovat</li>
        <li>Assignments</li>
        <li>Capstone Project</li>
      </ul>

      <p id="color">BLUE</p>

      <img src={friendsImg} class="w-75" />
      
    </div>

  );

}

export default App;
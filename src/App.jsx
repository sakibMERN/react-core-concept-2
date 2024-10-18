
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert ("button 2 clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>I am learning React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>Click me!</button>
      <button onClick={()=> {alert("third print")}}>Click me again!</button>
      <button onClick={() => addToFive(5)}>button four</button>
      
      
    </>
  )
}

export default App

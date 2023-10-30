
import './App.css';
import Dog from './components/dog';



const dogs = [
  {name:'ryder', age:4, breed:'pr street Dog'},
  {name:'drexlor', age:14, breed:'pr mami'},
  {name:'stevenson', age:24, breed:'hola diego'},
  {name:'Luke', age:17, breed:'the best', deceased:false},

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs</h1>
      {dogs.map(dog => <Dog age={dog.age} name={dog.name} breed={dog.breed} />)}
      </header>
    </div>
  );
}

export default App;

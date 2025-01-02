import './App.css';
import ChangeName from './components/ChangeName';
import Counter from './components/Counter';
import Demo from './components/Demo';
import DisplayName from './components/DisplayName';
import EvenOdd from './components/EvenOdd';
import Footer from './components/Footer';
import Header from './components/Header';
import Student from './components/Student';


function App() {
  return (
    <div className="App">
      <DisplayName />
      <Counter />
     <h1>Hello</h1>
     <Header/>
     <Footer/>
     <Student id={101} name={"Mohammad"}/>
     <Student id={102} name={"Hamza"}/>
    <Demo message="new year" year="2025"/>
    <ChangeName />
    <EvenOdd />
    
    </div>
    
  );
}

export default App;
// export default function_name

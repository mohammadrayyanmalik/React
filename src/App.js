import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Student from './components/Student';


function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Header/>
     <Footer/>
     <Student id={101} name={"Mohammad"}/>
     <Student id={102} name={"Hamza"}/>

    </div>
    
  );
}

export default App;
// export default function_name
